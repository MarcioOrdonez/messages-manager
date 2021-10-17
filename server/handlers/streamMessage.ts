import { Filters, MessageRepository } from "../domains/ports";

export class Stream {
  private repository: MessageRepository;

  constructor(repository: MessageRepository) {
    this.repository = repository;
  }

  async setFilter(filters: Filters): Promise<void> {
    await this.repository.setFilters(filters);
  }

  async getStream(): Promise<NodeJS.ReadableStream> {
    return await this.repository.getMessageStream();
  }
}
