const initState = {
    visible: 'ALL',
    visibleTypes: {
        all: 'ALL',
        completed: 'COMPLETED',
        todo: 'TODO'
    }
}

const changeVisible = (state, action) => {
    return {
        ...state,
        visible: action.visibleType
    }
}

const visibleFilters = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_VISIBLE':
            return changeVisible(state, action);
        default:
            return state;
    }
}

export default visibleFilters;