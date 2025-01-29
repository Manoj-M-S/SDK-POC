/**
 * Simple Chatbot SDK for embedding into web applications.
 * This is a proof of concept (POC) version with core chat functionalities.
 *
 * Features:
 * - Creates a floating chat UI on the webpage.
 * - Allows users to send messages.
 * - Simulates bot responses.
 */

interface ChatBotConfig {
  apiKey: string; // Required for authentication and API communication
}

class ChatBotSDK {
  private config: ChatBotConfig;
  private container: HTMLElement | null = null;

  constructor(config: ChatBotConfig) {
    this.config = config;

    if (!this.config.apiKey) {
      throw new Error("API key is required");
    }
  }

  /**
   * Initializes the chatbot by creating the UI and setting up event listeners.
   */

  public async initialize(): Promise<void> {
    // Create the chat container
    this.container = document.createElement("div");
    this.container.id = "chatbot-sdk-container";
    document.body.appendChild(this.container);

    // Add styles to the chatbot UI
    this.injectStyles();

    // Create chat interface
    this.container.innerHTML = `
      <div class="chatbot-container">
        <div class="chatbot-header">
          <span>Chat Assistant</span>
        </div>
        <div class="chatbot-body"></div>
        <div class="chatbot-input-container">
          <input class="chatbot-input" placeholder="Type your message...">
          <button class="chatbot-button">Send</button>
        </div>
      </div>
    `;

    // Setup event listeners
    this.setupEventListeners();

    // Simulate authentication and initial message
    try {
      await this.authenticate();
      this.addMessage("Hello! How can I help you today?", "bot");
    } catch (error) {
      console.error("ChatBot initialization failed:", error);
    }
  }

  private async authenticate(): Promise<void> {
    // Simulated authentication - in a real-world scenario, this would verify the API key
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!this.config.apiKey) {
          throw new Error("Invalid API key");
        }
        resolve();
      }, 500);
    });
  }

  /**
   * Sets up event listeners for sending messages and toggling the chatbot.
   */
  private setupEventListeners(): void {
    const input = this.container?.querySelector(
      ".chatbot-input"
    ) as HTMLInputElement;
    const button = this.container?.querySelector(".chatbot-button");

    button?.addEventListener("click", () => this.handleSend());
    input?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleSend();
    });
  }

  /**
   * Handles sending a user message and simulating a bot response.
   */
  private handleSend(): void {
    const input = this.container?.querySelector(
      ".chatbot-input"
    ) as HTMLInputElement;
    const message = input.value.trim();
    if (!message) return;

    this.addMessage(message, "user");
    input.value = "";

    // Simulate response - in real-world scenarios, this would call an API
    setTimeout(() => {
      this.addMessage("This is a simulated response from the chatbot.", "bot");
    }, 1000);
  }

  /**
   * Adds a message to the chat UI.
   * @param content - The message text.
   * @param sender - "user" or "bot" to determine styling.
   */
  private addMessage(content: string, sender: "user" | "bot"): void {
    const body = this.container?.querySelector(".chatbot-body");
    const message = document.createElement("div");
    message.className = `chatbot-message ${sender}-message`;
    message.textContent = content;
    body?.appendChild(message);
    if (body) body.scrollTop = body.scrollHeight;
  }

  /**
   * Injects necessary CSS styles for the chatbot UI.
   */
  private injectStyles(): void {
    const style = document.createElement("style");
    style.setAttribute("data-chatbot-sdk", "true");
    style.textContent = `
      .chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        font-family: system-ui, sans-serif;
        z-index: 1000;
        transition: all 0.3s ease;
      }
      .chatbot-header {
        padding: 16px;
        background: #2563eb;
        color: white;
        border-radius: 12px 12px 0 0;
      }
      .chatbot-body {
        height: 300px;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .chatbot-message {
        max-width: 80%;
        padding: 12px;
        border-radius: 12px;
        margin: 4px 0;
      }
      .user-message {
        background: #2563eb;
        color: white;
        align-self: flex-end;
      }
      .bot-message {
        background: #f1f5f9;
        color: #1a1a1a;
        align-self: flex-start;
      }
      .chatbot-input-container {
        padding: 16px;
        border-top: 1px solid #e2e8f0;
        display: flex;
        gap: 8px;
      }
      .chatbot-input {
        flex-grow: 1;
        padding: 8px;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
      }
      .chatbot-button {
        padding: 8px 16px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  }
}

// Export the class properly for usage
if (typeof window !== "undefined") {
  (window as any).ChatBotSDK = ChatBotSDK;
}

export default ChatBotSDK;
