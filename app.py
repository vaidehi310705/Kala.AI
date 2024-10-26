from flask import Flask, render_template, request, jsonify
import json
import google.generativeai as genai

app = Flask(__name__)
with open("api_key.json", "r") as file:
    data = json.load(file)

genai.configure(api_key=data["key"])

model = genai.GenerativeModel('gemini-pro')

def send_message(message, history):
    history.append({"role":"user", "parts":message})
    chat = model.start_chat(history = history)
    response = chat.send_message(message)
    history.append({"role":"model", "parts":response.text})
    return response.text, history

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    history = request.json.get('history')
    response, history = send_message(user_message, history)
    return jsonify({'message': response, "history":history})

if __name__ == '__main__':
    app.run(debug=True)
