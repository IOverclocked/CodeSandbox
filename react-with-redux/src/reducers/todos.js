const initState = {
    list: [{
        id: 1,
        todo: 'lorem ipsum dolor sit amet',
        done: false
    }, {
        id: 2,
        todo: 'lorem ipsum dolor sit amet',
        done: false
    }, {
        id: 3,
        todo: 'lorem ipsum dolor sit amet',
        done: false
    }, {
        id: 4,
        todo: 'lorem ipsum dolor sit amet',
        done: false
    }]
}

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                list: [...state.list, action.todo]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== action.id)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                list: state.list.map(todo => {
                    if (todo.id === action.todo.id) {
                        return action.todo;
                    } else return todo;
                })
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                list: state.list.map(todo => {
                    if (todo.id === action.id) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

export default todos;