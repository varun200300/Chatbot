$(document).ready(function() {
    // Function to handle user input
    function handleUserInput() {
      var userInput = $("#user-input").val();
      if (userInput.trim() === "") return;
      $("#chat-box").append('<div class="chat-message sent">' + userInput + '</div>');
      $("#user-input").val(""); // Clear input field
      // Simulate chatbot response (for demo)
      setTimeout(function() {
        $("#chat-box").append('<div class="chat-message received">I received: ' + userInput + '</div>');
        // Scroll to bottom of chat box
        var chatBox = document.getElementById("chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 500);
    }
  
    // Handle click on send button
    $("#send-btn").click(function() {
      handleUserInput();
    });
  
    // Handle pressing enter key
    $("#user-input").keypress(function(event) {
      if (event.which == 13) { // 13 is the enter key code
        handleUserInput();
      }
    });
  });
  