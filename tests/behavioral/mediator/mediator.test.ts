import { ChatRoomMediator } from "../../../src/patterns/behavioral/mediator/implementations/chatRoomMediator";
import { User } from "../../../src/patterns/behavioral/mediator/models/user";
/**
 * Test cases for the mediator design pattern.
 */
describe("Mediator Design Pattern", () => {
  it("should allow users to send and receive messages via a mediator", () => {
    const chatRoom = new ChatRoomMediator();

    const user1 = new User("Alice", chatRoom);
    const user2 = new User("Bob", chatRoom);
    const user3 = new User("Charlie", chatRoom);

    chatRoom.registerParticipant(user1);
    chatRoom.registerParticipant(user2);
    chatRoom.registerParticipant(user3);

    const consoleSpy = jest.spyOn(console, "log");

    user1.send("Hello, everyone!");
    user2.send("Hi, Alice!");

    expect(consoleSpy).toHaveBeenCalledWith("Alice sends: Hello, everyone!");
    expect(consoleSpy).toHaveBeenCalledWith("Bob receives from Alice: Hello, everyone!");
    expect(consoleSpy).toHaveBeenCalledWith("Charlie receives from Alice: Hello, everyone!");

    expect(consoleSpy).toHaveBeenCalledWith("Bob sends: Hi, Alice!");
    expect(consoleSpy).toHaveBeenCalledWith("Alice receives from Bob: Hi, Alice!");
    expect(consoleSpy).toHaveBeenCalledWith("Charlie receives from Bob: Hi, Alice!");

    consoleSpy.mockRestore();
  });
});