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
    apiKey: string;
}
declare class ChatBotSDK {
    private config;
    private container;
    constructor(config: ChatBotConfig);
    /**
     * Initializes the chatbot by creating the UI and setting up event listeners.
     */
    initialize(): Promise<void>;
    private authenticate;
    /**
     * Sets up event listeners for sending messages and toggling the chatbot.
     */
    private setupEventListeners;
    /**
     * Handles sending a user message and simulating a bot response.
     */
    private handleSend;
    /**
     * Adds a message to the chat UI.
     * @param content - The message text.
     * @param sender - "user" or "bot" to determine styling.
     */
    private addMessage;
    /**
     * Injects necessary CSS styles for the chatbot UI.
     */
    private injectStyles;
}
export default ChatBotSDK;
