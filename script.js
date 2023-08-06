function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();
  
    if (message !== "") {
      addMessage("You", message);
  

      fetch("chatbot.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "message=" + encodeURIComponent(message),
      })
        .then((response) => response.text())
        .then((reply) => addMessage("Chatbot", reply))
        .catch((error) => console.error("Error:", error));
  
      userInput.value = "";
    }
  }
  
  function addMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  