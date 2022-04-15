const initialState = {
    todos : []
}

export const addTodo = (state = initialState, action) => { 
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: state.todos.concat(action.payload) };
            
        default:
            return state;
    }
}