document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessage");
    const chatMessages = document.getElementById("chatMessages");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    sendMessageButton.addEventListener("click", function() {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const messageItem = document.createElement("li");
            messageItem.textContent = messageText;
            chatMessages.appendChild(messageItem);
            messageInput.value = "";
        }
    });
});
