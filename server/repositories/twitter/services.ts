import needle from "needle";
import { Filters } from "../../domains/ports";
import { TwitterRule } from "./repository";
import dotenv from "dotenv";

dotenv.config();

const RULESURL = process.env.TWITTER_RULE || "";
const STREAMURL = process.env.TWITTER_STREAM || "";
const TOKEN = process.env.TWITTER_TOKEN || "";

const twitterApi = {
  async setRules(filters: Filters): Promise<void> {
    const data = { add: filters };
    await needle("post", RULESURL, data, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },

  async getRules(): Promise<Array<TwitterRule>> {
    const response = await needle("get", RULESURL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.body.meta.result_count === 0) return [];
    return response.body.data;
  },

  async clearRules(ids: Array<string>): Promise<void> {
    const data = { delete: { ids: ids } };
    await needle("post", RULESURL, data, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },

  async stream(): Promise<NodeJS.ReadableStream> {
    const stream = await needle.get(STREAMURL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return stream;
  },
};

export default twitterApi;
