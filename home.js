var ChatApp = /** @class */ (function () {
    function ChatApp() {
        var _this = this;
        $(document).ready(function () {
            $("#send-btn").on("click", function () {
                _this.sendMessage();
            });
            $("#user-input, .number-input").keypress(function (event) {
                if (event.which === 13) {
                    _this.sendMessage();
                }
            });
        });
    }
    ChatApp.prototype.sendMessage = function () {
        var _this = this;
        var userMessage = $("#user-input").val();
        var mark1 = $("#mark1").val();
        var mark2 = $("#mark2").val();
        var mark3 = $("#mark3").val();
        var mark4 = $("#mark4").val();
        var mark5 = $("#mark5").val();
        if (userMessage.trim() !== "") {
            this.appendMessage(userMessage, "user");
            this.appendMessage("mark 1: " + mark1, "user");
            this.appendMessage("mark 2: " + mark2, "user");
            this.appendMessage("mark 3: " + mark3, "user");
            this.appendMessage("mark 4: " + mark4, "user");
            this.appendMessage("mark 5: " + mark5, "user");
            setTimeout(function () {
                _this.appendMessage("I received: " + userMessage, "bot");
                _this.appendMessage("Total Marks is: " + (parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5)), "bot");
            }, 500);
            $("#user-input").val("");
            $(".number-input").val("");
        }
    };
    ChatApp.prototype.appendMessage = function (message, sender) {
        var messageClass = (sender === "user") ? "sent" : "received";
        var messageElement = '<div class="chat-message ' + messageClass + '">' + message + '</div>';
        $("#chat-box").append(messageElement);
        $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
    };
    return ChatApp;
}());
var chatApp = new ChatApp();
