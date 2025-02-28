# Healthcare AR UI

A modern healthcare accounts receivable management system with an AI-powered chatbot assistant.

## Features

- **Dashboard**: Overview of key financial metrics and patient statistics
- **Customer Management**: Track patient accounts and payment status
- **Payment Processing**: Monitor and manage payment transactions
- **AI Chatbot Assistant**: Natural language navigation and query handling

## Tech Stack

### Frontend
- React 18
- Chakra UI
- React Router
- Vite

### Backend (Coming Soon)
- Python FastAPI
- WebSocket for real-time chat
- OpenAI Integration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Python 3.8+ (for backend)

## Installation

### Frontend Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:5173 in your browser

### Backend Setup (Coming Soon)

1. Create a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```
2. Install Python dependencies:
   ```bash
   pip install fastapi uvicorn openai python-dotenv websockets
   ```
3. Create a .env file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

## Usage

### Navigation

- Use the sidebar menu to navigate between different sections
- Click on the chat icon in the bottom right to open the AI assistant
- Type natural language commands like "show me the payments page" or "go to dashboard"

### Chatbot Features

- Navigation commands (e.g., "take me to customers")
- Query financial data (coming soon)
- Get insights and analytics (coming soon)

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT