import { combineReducers } from 'redux';
import todos from './todos';
import editMode from './editMode';
import visibleFilters from './visibleFilters';

const rootReducer = combineReducers({
    todos,
    editMode,
    visibleFilters
})

export default rootReducer;
