const initState = {
    edit: {
        active: false,
        todo: {}
    },
}

const editModeOn = (state, action) => {
    return {
        ...state,
        edit: {
            active: true,
            todo: action.todo
        },
    }
}

const editModeOff = (state, action) => {
    return {
        ...state,
        edit: {
            active: false,
            todo: {}
        },
    }
}

const editMode = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_MODE_ON':
            return editModeOn(state, action);
        case 'EDIT_MODE_OFF':
            return editModeOff(state, action);
        default:
            return state;
    }
}

export default editMode;