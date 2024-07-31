from flask import Flask, request, jsonify, render_template
import openai
import logging

# Instantiate the OpenAI client with your API key
openai.api_key = 'sk-proj-n7Qn76Z8xheioMcvwRzkT3BlbkFJtWDWFjiIP9ZrSBAFod7R'

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def ai_assistant():
    return render_template('ai-assistant.html')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        current_field = data['current_field']
        desired_field = data['desired_field']
        user_message = f"I am currently working in the field of {current_field}. I want to transition to the field of {desired_field}. Can you provide me with a detailed plan on how I can make this transition easier?"
        
        # Get the AI-generated response using the chat completions endpoint
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": user_message}],
            max_tokens=1000,
            n=1,
            stop=None,
            temperature=0.7,
        )
        
        # Check if there are any choices (i.e., responses) before accessing text
        if response.choices:
            advice = response.choices[0].message['content']
            return jsonify({'advice': advice})
        else:
            # Handle empty response case (e.g., return default message or error)
            return jsonify({'error': 'No response generated by the AI model.'})
    
    
    except Exception as e:
        app.logger.error(f"An error occurred: {e}")
        return jsonify({'error': str(e)}), 1000

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)