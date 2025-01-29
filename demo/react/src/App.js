import './App.css';
import ChatbotComponent from './ChatbotComponent.jsx';
function App() {
  return (
    <div>
    <h1>My App</h1>
    <ChatbotComponent 
      apiKey="your-api-key"
    />
  </div>
  );
}

export default App;
