import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar"
import {Paragraph} from "./components/Paragraph"
import { Myself } from './components/My self';
import {Input} from './components/Input';
import {Counter} from './components/Counter'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Paragraph></Paragraph>
      <Input></Input>
      <Myself name="Prince" age={20} gender="female"></Myself>
      <Counter></Counter>
    </div>
  );
}

export default App;
