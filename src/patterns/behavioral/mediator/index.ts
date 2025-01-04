import { ChatRoomMediator } from "./implementations/chatRoomMediator";
import { User } from "./models/user";

/**
 * Entry point for the Mediator Design Pattern example.
 */
const main = () => {
  const chatRoom = new ChatRoomMediator();

  const user1 = new User("Alice", chatRoom);
  const user2 = new User("Bob", chatRoom);
  const user3 = new User("Charlie", chatRoom);

  chatRoom.registerParticipant(user1);
  chatRoom.registerParticipant(user2);
  chatRoom.registerParticipant(user3);

  user1.send("Hello, everyone!");
  user2.send("Hi, Alice!");
  user3.send("Hey, Alice and Bob!");
};

main();