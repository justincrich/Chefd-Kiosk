import initialStates from 'central-state/reducers/initialStates.js';
import ActionTypeRepo from 'central-state/action-types.js';

const {contact:ActionTypes} = ActionTypeRepo;
const {contacts:initial} = initialStates;

export default function ContactReducer(state=initial,action){
    switch(action.type){
        case ActionTypes.ADD_CONTACT_BEGIN:{
            return{
                ...state,
                isFetching:action.isFetching,
                email:action.email
            }
            
        }
        case ActionTypes.ADD_CONTACT_COMPLETE:{
            return{
                email:action.email,
                isFetching:action.isFetching,
                error:action.error
            }
        }
        case ActionTypes.ADD_CONTACT_ERROR:{
            return{
                ...state,
                isFetching:action.isFetching,
                error:action.error
            }
        }
        default:
            return state;
    }
}