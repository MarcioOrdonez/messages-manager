export type Filters = Array<{ value: string }>;

export interface MessageRepository {
  setFilters(filters: Filters): Promise<void>;
  getMessageStream(): Promise<NodeJS.ReadableStream>;
}
