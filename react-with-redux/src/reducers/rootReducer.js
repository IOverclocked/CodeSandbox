//State
const initState = {
    todos: [{
        id: 1,
        body: 'lorem ipsum dolor sit amet'
    }, {
        id: 2,
        body: 'lorem ipsum dolor sit amet'
    }, {
        id: 3,
        body: 'lorem ipsum dolor sit amet'
    }, {
        id: 4,
        body: 'lorem ipsum dolor sit amet'
    },],
    posts: []
}

const rootReducer = (state = initState, action) => {
    return state;
}

//Reducers
// function reducer(state = initState, action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todos: [...state.todos, action.todo]
//             }
//         case 'ADD_POST':
//             return {
//                 ...state,
//                 posts: [...state.posts, action.post]
//             }
//         default:
//             return state
//     }
// }

export default rootReducer;

