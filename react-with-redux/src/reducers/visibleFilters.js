const initState = {
    visible: 'ALL',
    visibleTypes: {
        all: 'ALL',
        completed: 'COMPLETED',
        todo: 'TODO'
    }
}

const visibleFilters = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_VISIBLE':
            return {
                ...state,
                visible: action.visibleType
            }
        default:
            return state;
    }
}

export default visibleFilters;