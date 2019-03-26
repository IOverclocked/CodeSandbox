const initState = {
    edit: {
        active: false,
        todo: {}
    },
}

const editMode = (state = initState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default editMode;