from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import json

# Load environment variables
load_dotenv()

# Get OpenAI API key
api_key = os.getenv('OPENAI_API_KEY')
if not api_key:
    raise ValueError("OPENAI_API_KEY environment variable not set")

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    try:
        while True:
            # Receive message from client
            data = await websocket.receive_text()
            message = json.loads(data)
            
            # Process non-navigation queries with OpenAI
            try:
                # Using the updated OpenAI client
                import openai
                client = openai.OpenAI(api_key=api_key)
                
                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": "You are a friendly and versatile assistant with expertise in healthcare billing. While your primary focus is on providing concise, relevant information about healthcare billing, payments, and customer accounts, you can also engage in general conversation to help users feel more comfortable. Always maintain a professional yet approachable tone."},
                        {"role": "user", "content": message['text']}
                    ],
                    max_tokens=150,
                    temperature=0.7
                )
                
                # Extract and send response
                ai_response = response.choices[0].message.content
                await websocket.send_text(json.dumps({"text": ai_response}))
            except Exception as e:
                print(f"OpenAI API Error: {str(e)}")
                await websocket.send_text(json.dumps({"text": "I'm having trouble connecting to my knowledge base. Please try again later."}))
            
    except Exception as e:
        print(f"WebSocket Error: {str(e)}")
        await websocket.close()

@app.get("/")
def read_root():
    return {"status": "Healthcare AR Backend is running"}