//actions for todos reducer
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

//actions for editMode reducer
const EDIT_MODE_ON = 'EDIT_MODE_ON';
const EDIT_MODE_OFF = 'EDIT_MODE_OFF';

//actions for visibleFilter reducer
const CHANGE_VISIBLE = 'CHANGE_VISIBLE';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        todo: todo
    }
}

export const editModeOn = (todo) => {
    return {
        type: EDIT_MODE_ON,
        todo: todo
    }
}

export const toggleCompleted = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        id: id
    }
}

export const exitEdit = () => {
    return {
        type: EDIT_MODE_OFF
    }
}

export const changeVisible = (visibleType) => {
    return {
        type: CHANGE_VISIBLE,
        visibleType: visibleType
    }
}