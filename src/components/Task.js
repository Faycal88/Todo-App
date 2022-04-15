import React from "react";
import { connect } from "react-redux";
import { checkTodo, deleteTodo, editTodo } from "../Redux/action/addTask.action";


const Todo = ({ todo , idx , deleteTodo , editTodo,selected,text,check,checkTodo }) => { 
    return (
        
        <div style={{ display: 'flex', flexDirection: 'flex-start', justifyContent: 'space-evenly', border: '1px solid white', padding: '5px', width: '200px', cursor: 'pointer' }} >
            <input style={{ width: '1rem', height: '0.8rem', margin: '0', padding: '0' }} type="checkbox" checked={check} onChange={() => checkTodo(idx)} />
            <div onClick={() => editTodo(idx)} >
            {
                selected === idx ? text : todo
            } </div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteTodo(idx)}>x</div>
        </div>
            
            
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key)),
    checkTodo: key => dispatch(checkTodo(key))
})
const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected,
    check: state.check
})
export default connect(mapStateToProps,mapDispatchToProps)(Todo);