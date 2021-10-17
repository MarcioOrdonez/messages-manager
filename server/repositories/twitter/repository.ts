import { Filters, MessageRepository } from "../../domains/ports";
import twitterApi from "./services";

export interface TwitterRule {
  id: string;
  value: string;
}

export class TwitterRepository implements MessageRepository {
  public async setFilters(filters: Filters): Promise<void> {
    await this.clearRules();
    await twitterApi.setRules(filters);
  }

  public async getMessageStream(): Promise<NodeJS.ReadableStream> {
    return await twitterApi.stream();
  }

  private async clearRules(): Promise<void> {
    const rules = await twitterApi.getRules();
    const ids = rules.map(({ id }: TwitterRule) => id);
    await twitterApi.clearRules(ids);
  }
}
