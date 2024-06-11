class ChatApp {
    constructor() {
        $(document).ready(() => {
            $("#send-btn").on("click", () => {
                this.sendMessage();
            });

            $("#user-input, .number-input").keypress((event) => {
                if (event.which === 13) {
                    this.sendMessage();
                }
            });
        });
    }

    sendMessage(): void {
        const userMessage: string = $("#user-input").val() as string;
        const mark1: string = $("#mark1").val() as string;
        const mark2: string = $("#mark2").val() as string;
        const mark3: string = $("#mark3").val() as string;
        const mark4: string = $("#mark4").val() as string;
        const mark5: string = $("#mark5").val() as string;

        if (userMessage.trim() !== "") {
            this.appendMessage(userMessage, "user");
            this.appendMessage("mark 1: " + mark1, "user");
            this.appendMessage("mark 2: " + mark2, "user");
            this.appendMessage("mark 3: " + mark3, "user");
            this.appendMessage("mark 4: " + mark4, "user");
            this.appendMessage("mark 5: " + mark5, "user");
            setTimeout(() => {
                this.appendMessage("I received: " + userMessage, "bot");
                this.appendMessage("Total Marks is: " + (parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5)), "bot");
            }, 500);

            $("#user-input").val("");
            $(".number-input").val("");
        }
    }

    appendMessage(message: string, sender: string): void {
        const messageClass: string = (sender === "user") ? "sent" : "received";
        const messageElement: string = '<div class="chat-message ' + messageClass + '">' + message + '</div>';
        $("#chat-box").append(messageElement);
        $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
    }
}
const chatApp = new ChatApp();
