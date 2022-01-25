import '../App.css';
import { getMessages, addMessage } from '../services/near';
import Messages from '../components/Messages';
import Form from '../components/Form';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Form addMessage={addMessage} />
      <Messages getMessages={getMessages} />
    </div>
  );
};

export default Home;
