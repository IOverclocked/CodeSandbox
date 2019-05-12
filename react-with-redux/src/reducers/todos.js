const initState = {
    list: []
}

const addTodo = (state, action) => {
    return {
        ...state,
        list: [...state.list, action.todo]
    }
}

const deleteTodo = (state, action) => {
    return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
    }
}

const editTodo = (state, action) => {
    return {
        ...state,
        list: state.list.map(todo => {
            if (todo.id === action.todo.id) {
                return action.todo;
            } else return todo;
        })
    }
}

const toggleCompleted = (state, action) => {
    return {
        ...state,
        list: state.list.map(todo => {
            if (todo.id === action.id) {
                todo.done = !todo.done;
            }
            return todo;
        })
    }
}

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'DELETE_TODO':
            return deleteTodo(state, action);
        case 'EDIT_TODO':
            return editTodo(state, action);
        case 'TOGGLE_COMPLETED':
            return toggleCompleted(state, action);
        default:
            return state;
    }
}

export default todos;