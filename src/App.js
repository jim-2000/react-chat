import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Component/ChatFeed'
function App() {
  return (
    <div className="App">
     <ChatEngine
        height= "100vh"
        projectID="
        ccf89fe2-2bc0-4495-96f9-8423c4466783"
        userName="jim"
        userSecret="123456789"
        renderChatFeed = {(chatAppProps)=> <ChatFeed {... chatAppProps} /> }
     />
    </div>
  );
}

export default App;
