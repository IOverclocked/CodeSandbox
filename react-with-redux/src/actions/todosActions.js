export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        todo: todo
    }
}

export const editModeOn = (todo) => {
    return {
        type: 'EDIT_MODE_ON',
        todo: todo
    }
}

export const toggleCompleted = (id) => {
    return {
        type: 'TOGGLE_COMPLETED',
        id: id
    }
}

export const exitEdit = () => {
    return {
        type: 'EDIT_MODE_OFF'
    }
}