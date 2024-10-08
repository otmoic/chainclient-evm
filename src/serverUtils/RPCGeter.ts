import needle from "needle";
import { ethers } from "ethers";

export default class RPCGeter {
  blackList: string[] = [];

  addBlack = (black: string) => {
    if (this.blackList.includes(black)) {
    } else {
      this.blackList.push(black);
      console.log("new black", black);
    }

    console.log("this.blackList", this.blackList);
  };

  chooseOne = (chainId: number) =>
    new Promise<string>((resolve) => {
      needle("get", "https://chainid.network/chains.json")
        .then(async (resp) => {
          for (const chainInfo of resp.body) {
            if (chainId == chainInfo.chainId) {
              const url = await this.chooseAUrl(chainInfo.rpc);
              console.log("choose url", url);
              resolve(url);
              return;
            }
          }
        })
        .catch((error) => {
          console.log("choose url error:", error);
          resolve(undefined);
        });
    });

  chooseAUrl = (urls: string[]) =>
    new Promise<string>(async (resolve, reject) => {
      const heights: {
        url: string;
        height: number;
      }[] = [];
      for (const url of urls) {
        if (this.blackList.includes(url)) {
          continue;
        }
        try {
          const height = await new ethers.providers.JsonRpcProvider(
            url
          ).getBlockNumber();
          console.log(url, height);
          heights.push({
            url: url,
            height: height,
          });
        } catch (error) { }
      }

      if (heights.length == 0) {
        resolve(undefined);
      } else {
        resolve(heights.sort((a, b) => b.height - a.height)[0].url);
      }
    });
}

// const geter = new RPCGeter()
// geter.chooseOne(97)
