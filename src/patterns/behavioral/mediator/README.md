# Mediator Design Pattern

This example demonstrates the **Mediator Design Pattern** through a chatroom system where multiple users communicate via a mediator.

## Problem Statement

In a chatroom application, users communicate with each other. Instead of each user managing connections with all other users, a mediator (chatroom) handles the communication. This reduces coupling between users and centralizes communication logic.

## Implementation

### Features:
1. Users can send messages.
2. Messages are received by all other users in the chatroom.

### Files and Structure:
- **Interfaces**:
  - `Mediator`: Defines methods for communication.
  - `Participant`: Represents participants in the communication.
- **Models**:
  - `User`: Represents individual chatroom participants.
- **Implementations**:
  - `ChatRoomMediator`: Implements communication logic.


## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/mediator/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/mediator/index.ts

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
```

## Expected Output
Alice sends: Hello, everyone!
Bob receives from Alice: Hello, everyone!
Charlie receives from Alice: Hello, everyone!

Bob sends: Hi, Alice!
Alice receives from Bob: Hi, Alice!
Charlie receives from Bob: Hi, Alice!

Charlie sends: Hey, Alice and Bob!
Alice receives from Charlie: Hey, Alice and Bob!
Bob receives from Charlie: Hey, Alice and Bob!


## Tests Cases - Test Snippet (from mediator.test.ts)
```ts
// tests/behavioral/mediator/mediator.test.ts

import { ChatRoomMediator } from "../../../src/patterns/behavioral/mediator/implementations/chatRoomMediator";
import { User } from "../../../src/patterns/behavioral/mediator/models/user";

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


```

## Benefits
1. Decoupling: Reduces direct dependencies between participants.
2. Centralized Logic: Simplifies communication by centralizing logic in the mediator.
3. Open/Closed Principle: New participants or communication rules can be added without modifying existing classes.


### Summary
The Mediator Design Pattern is useful when you have a system where objects need to communicate with each other, but you want to avoid tight coupling between them. It centralizes communication logic, making the system more flexible and easier to maintain. 