import React from "react";
import { connect } from "react-redux";
import Todo from "./Task";

const TodosList = ({todos}) => { 
    return (
        
        <div style={{display : 'flex',flexDirection : 'column' ,height: '200px',overflowY:'auto',overflowX:'hidden'}} >
            {
                todos.map((todo, i) => (<Todo key={i} todo={todo} idx={i}/> ))
              }  
        </div>
    )
}

const mapStateToProps = ({todos}) => ({
    todos: todos
});
export default connect(mapStateToProps)(TodosList);