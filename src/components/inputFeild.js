import React from "react";
import { addtext, addTodo, editAddTodo } from "../Redux/action/addTask.action";
import {connect} from "react-redux";

const InputField = ({addtext,text,selected,addTodo,editAddTodo}) => { 
    
    const handleChange = (e) => addtext(e.target.value);
    const handleSubmit = (e) => { 
        e.preventDefault();
        if (selected || selected === 0) {
            editAddTodo({value:text,selected:selected})
        }else
        addTodo(text);
        
    }
    
        return (
            <form onSubmit={handleSubmit} >
                <input type="text" name="todo" value={text} placeholder="Add Tasks..." onChange={handleChange}></input>
            </form>
        )
    
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addtext: value => dispatch(addtext(value)),
    editAddTodo : obj => dispatch(editAddTodo(obj))
});
const mapStateToProps = ({ text,selected}) => ({
    text: text,
    selected : selected
})
export default connect(mapStateToProps,mapDispatchToProps)(InputField);