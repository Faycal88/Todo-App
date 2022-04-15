import './App.css';
import InputField from './components/inputFeild';
import TodosList from './components/ListTask';


function App() {
  return (
    <div className="App">
      <h1 style={{textDecoration : "underline"}} >Todo App</h1>
      <InputField />
      <TodosList/>
      </div>
  );
}

export default App;
