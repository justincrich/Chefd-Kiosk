import { combineReducers } from 'redux';

import contactReducer from 'central-state/reducers/contacts/constacts.js';
import engagementReducer from 'central-state/reducers/engagement/engagement.js';
const reducers = combineReducers({
    contactsState:contactReducer,
    engagementState:engagementReducer
})

export default reducers;