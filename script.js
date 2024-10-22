document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim();

    if (messageText === '') {
        return; // Do nothing if input is empty
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.innerText = messageText;

    // Append message to chat box
    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageElement);

    // Clear the input field
    input.value = '';

    // Auto-scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
