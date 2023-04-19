import Clock from '../Clock/Clock';
import MemoComponent from '../MemoComponent/MemoComponent';
import './App.css';
import UseEffectForShouldComponentUpdate from './UseEffectForShouldComponentUpdate/UseEffectForShouldComponentUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <MemoComponent />
        <UseEffectForShouldComponentUpdate />
      </header>
    </div>
  );
}

export default App;
