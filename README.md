# Chatbot SDK Integration Guide

This repository contains a proof of concept (POC) for a Chatbot SDK that can be integrated into various web applications. The SDK provides functionalities for embedding a chatbot into websites, allowing users to interact with it.

## Features

- Creates a floating chat UI on the webpage.
- Allows users to send messages and receive simulated bot responses.
- Easy integration with vanilla HTML, React, and Next.js applications.

## Running the Demo Applications

### Vanilla HTML

To integrate the SDK into a vanilla HTML website, include the SDK script in your HTML file and initialize it:

html:demo/index.html
### Local Development Setup for React and Nextjs

1. Build the SDK package:
   ```bash
   cd packages/sdk
   npm install
   npm run build
   npm pack
   ```
   This will create a file like `chatbot-sdk-1.0.0.tgz`

2. Install in your project:
   ```bash
   # From your project directory
   npm install ../path/to/chatbot-sdk-1.0.0.tgz
   ```
   #### React Demo
    ```bash
    cd demo/react
    npm install
    npm start
    ```

    #### Next.js Demo
    ```bash
    cd demo/nextjs
    npm install
    npm run dev
    ```

### Production Usage
Once published to npm, clients can install directly:
```bash
npm install @your-org/chatbot-sdk
```

## Troubleshooting

### Common Issues
1. **SDK not loading**: Ensure the correct path to the SDK package
2. **TypeScript errors**: Verify you're using the latest SDK types
3. **Next.js SSR errors**: Make sure to use the 'use client' directive
