import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import InputField from './components/inputFeild';
import TodosList from './components/ListTask';
import { deleteAll, persistTodo } from './Redux/action/addTask.action';


const App = ({ deleteAll,persistTodo }) => {
  useEffect(() => {
    persistTodo();
  },[persistTodo])
  return (
    <div className="App">
      <h1 style={{textDecoration : "underline"}} >Todo App</h1>
      <InputField />
      <TodosList />
      <div>
        
        <button style={{ cursor: 'pointer', marginTop: '20px' }} onClick={() => deleteAll()} >Delete All</button>
        <button></button>
      </div>
      </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodo: () => dispatch(persistTodo())
})

export default connect(null,mapDispatchToProps)(App)
