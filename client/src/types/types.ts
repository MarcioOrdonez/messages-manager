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
