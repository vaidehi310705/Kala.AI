<<<<<<< HEAD
# Gemini-Like Professional ChatBot Portfolio

This project is a professional chatbot interface built as part of my portfolio to demonstrate my skills in **natural language processing (NLP)**, **frontend/backend development**, and **AI-driven chatbots**. The chatbot mimics the look and feel of popular AI conversational interfaces like ChatGPT and includes several features such as syntax highlighting, Markdown parsing, auto-resizing input fields, and integration with the **Gemini API** for generating intelligent responses and maintaining conversation context.

Here is the YouTube Video Demo for the ChatBOT: https://www.youtube.com/watch?v=587YVIePVmI 

## Features

### 1. **Gemini-Like Interface**
   - The interface is designed to closely resemble popular AI chat interfaces, with a clean, minimalist layout. It includes:
     - User and bot message bubbles with distinctive styles.
     - Auto-scrolling message display to keep the conversation flow continuous.

### 2. **Gemini API Integration**
   - The chatbot uses the **Gemini API** to generate intelligent responses based on user inputs. It also maintains context across multiple messages, allowing for coherent and context-aware conversations.
   - The API enhances the chatbot's ability to engage in natural, flowing dialogues by leveraging advanced NLP and machine learning models.

### 3. **Context Maintenance**
   - The chatbot keeps track of conversation context using the Gemini API, allowing it to handle multi-turn conversations seamlessly. It remembers prior user inputs and uses them to generate appropriate follow-up responses.

### 4. **Markdown Parsing**
   - The chatbot supports Markdown formatting, which means responses can include rich text elements such as:
     - **Bold** and *italic* text.
     - Bullet points and numbered lists.
     - Headings (`#` for H1, `##` for H2, etc.).
   - This is achieved using the `marked.js` library, allowing for dynamic and rich content formatting in the responses.

### 5. **Syntax Highlighting for Code Blocks**
   - Responses containing code snippets are automatically detected and highlighted using `highlight.js`. The syntax is color-coded based on the programming language, making it easier to read.
   - Code blocks like:
     ```python
     def hello_world():
         print("Hello, world!")
     ```
     will appear with proper formatting and highlighting.

### 6. **Auto-Resizing Input Box**
   - The chatbot features a dynamically resizing input box for user input. As the user types long sentences or questions, the input field expands automatically to fit the content, providing a smooth typing experience.
   - This allows users to enter multi-line text easily, without needing to scroll within the input box.

### 7. **Flask Backend**
   - The chatbot backend is built using **Flask**, a lightweight Python web framework. The backend handles:
     - Processing user input.
     - Sending requests to the **Gemini API** for response generation.
     - Managing conversation history and formatting responses before sending them back to the frontend.
   - Flask also serves the frontend and handles REST API requests from the client.

### 8. **Dynamic Message Rendering**
   - All user and bot messages are dynamically rendered in the chat window with proper formatting. User messages are aligned to the right, while bot responses are aligned to the left.
   - A loading indicator (`...`) is displayed while the bot processes the response, enhancing the user experience.

### 9. **Mobile-Friendly Design**
   - The chat interface is responsive and optimized for mobile devices. It ensures that users on different devices have an optimal experience.

## Project Setup

To set up and run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chatbot-portfolio.git
cd chatbot-portfolio
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

### 3. Install Dependencies
Install Flask and any other dependencies with:
```bash
pip install Flask
```

### 4. Set Up Gemini API
- Obtain your Gemini API key from their Portal. 
- Edit the api_key.json file and enter your gemini API key. 

### 5. Run the Flask App
Start the Flask development server:
```bash
python app.py
```

The chatbot will be accessible at `http://127.0.0.1:5000/`.

### 6. Deploying to Production
To deploy this chatbot, you can use any Flask-compatible hosting service like **Heroku**, **AWS**, **Google Cloud**, or **DigitalOcean**.

## Usage and Demo

- **Try it locally**: After setting up the project, open your browser and start interacting with the chatbot interface.
- **Video Demo**: I will create a video demo showcasing the chatbot's features, including Markdown parsing, syntax highlighting, auto-resizing input field, and the integration with Gemini API.

## Technologies Used

- **Flask**: Backend framework for handling the API and server-side logic.
- **HTML/CSS/JavaScript**: Frontend interface, styled to mimic popular chatbot interfaces.
- **marked.js**: Library for parsing and rendering Markdown in responses.
- **highlight.js**: Library for syntax highlighting of code blocks in responses.
- **Gemini API**: Used to generate intelligent responses and maintain context across conversations.
- **Python**: Language used for backend logic.

## Future Improvements

Some potential improvements and features to add:
- **Additional NLP Models**: Explore integration with other NLP models like GPT to enhance response generation.
- **Multichannel Support**: Integrate with platforms like Slack, WhatsApp, or Messenger.
- **User Authentication**: Add user login and persistent chat history.

## Contributing

Feel free to open issues and submit pull requests if you'd like to contribute to this project.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
=======
<div id="top"></div>

<div align="center">
    <h2>JavaScript Chatbot</h2>
    <p>A Simple & Powerful chatbot in JavaScript.</p>
</div>

## About 

This is a simple and Powerful chatbot in nodejs. It also linked to wikipedia's API and very easy to customize with JSON. 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* NodeJs
* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/devXprite/javascript-chatbot
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Rename `.env.example` to `.env`
   ```sh 
   BOT_NAME="Bot Name"
   DEVELOPER_NAME="Your Name"
   DEVELOPER_EMAIL="Your Email"
   BUG_REPORT_URL="Your URL"
   ```
4. Start Server
   ```sh
   npm start
   ```

<!-- Scripts EXAMPLES -->
### Available Scripts

*In the project directory, you can run*:

- `npm run dev`

   Runs the app in the development mode.  
   Open http://localhost:3000 to view it in your browser.

- `npm run lint`

   Check for errors in your code.

- `npm run lint:fix`

   Fix auto fixable problems.

<!-- Deploy  -->
## Deploy

Click this button to configure your Project and deploy it to Vercel.  
  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FdevXprite%2Fjavascript-chatbot)

## Credit

Some chat intents were taken from **Dialogflow's [Small talk](https://dialogflow.cloud.google.com/#/agent/small-talk-bfie/intents)**.
>>>>>>> master
