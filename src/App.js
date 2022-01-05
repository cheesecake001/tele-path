import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const projectID="df653679-8234-420c-a5e3-a1a895a1aff1"

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={ (ChatProps) => <ChatFeed {...ChatProps} />}
        onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
      />
  );
}

export default App;
