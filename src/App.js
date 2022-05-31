import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import store from './store/store'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React JS and Redux</h1>
      <Provider store={store} >
        <Counter />
      </Provider>
      
    </div>
  );
}

export default App;
