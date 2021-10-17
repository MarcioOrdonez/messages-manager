import { Stream } from "../../handlers/streamMessage";
import { TwitterRepository } from "../../repositories/twitter/repository";

jest.mock("../../repositories/twitter/services", () => {
  twitterApi: {
    stream: jest.fn();
  }
});

describe("TwitterRepository", () => {
  let streamMessage;
  let stream;
  beforeAll(() => {
    streamMessage = new TwitterRepository();
    stream = new Stream(streamMessage);
  });
  it("stream should call the methods correctly", () => {
    stream.setFilter([{ value: "string" }]);
    stream.getStream();

    expect(stream.getStream());
  });
});
