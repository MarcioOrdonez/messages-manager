interface Users {
  id: string;
  name: string;
  username: string;
}
export interface MessageData {
  id: string;
  text: string;
  author_id: string;
  users: Users;
}

export class Message {
  private message: MessageData;

  constructor(data: MessageData) {
    this.message = {
      text: data.text,
      author_id: data.author_id,
      users: data.users,
      id: data.id,
    };
  }

  public getText(): string {
    return this.message.text;
  }

  public getAuthor(): string {
    return this.message.author_id;
  }

  public getUser(): Users {
    return this.message.users;
  }
}
