//State
const initState = {
    edit: {
        active: false,
        todo: {}
    },
    todos: [{
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
    }],
    visible: 'ALL',
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                edit: {
                    active: false,
                    todo: {}
                },
                todos: state.todos.map(todo => {
                    if (todo.id === action.todo.id) {
                        return action.todo;
                    } else return todo;
                })
            }
        case 'EDIT_MODE_ON':
            return {
                ...state,
                edit: {
                    active: true,
                    todo: action.todo
                },
            }
        case 'EDIT_MODE_OFF':
            return {
                ...state,
                edit: {
                    active: false,
                    todo: {}
                },
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.done = !todo.done;
                    }
                    return todo;
                })
            }
        case 'CHANGE_VISIBLE':
        debugger
            return {
                ...state,
                visible: action.type
            }
        default:
            return state;
    }
}

