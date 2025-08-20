const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
    console.log(`${user} has joined the chat room.`);
})

chat.on("message", (user, message) => {
    console.log(`${user} : ${message}`);
})

chat.on("leave", (user) => {
    console.log(`${user} has left the chat room.`);
})

//simulating the chat

chat.join("Shreya")
chat.join("Shivam")

chat.sendMessage("Shreya", "hey Shivam, Hello everyone!");
chat.sendMessage("Shivam", "Hello Shreya!, Hello everyone!");

chat.leave("Shreya");
chat.sendMessage("Shreya", "I am leaving now.");
chat.leave("Shivam"); 