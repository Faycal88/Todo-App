import React from "react";
import { connect } from "react-redux";
import Todo from "./Task";

const TodosList = ({todos}) => { 
    return (
        
        <div>
            {
                todos.map((todo, i) => <Todo todo={todo}/> )
              }  
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});
export default connect(mapStateToProps)(TodosList);