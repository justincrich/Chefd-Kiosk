// import ActionTypeRepo from 'central-state/action-types.js';
import initialStates from 'central-state/reducers/initialStates.js';

const {engagement:initial} = initialStates;
// const {engagement:ActionTypes} = ActionTypeRepo;

export default function EngagementReducer(state=initial,action){
    switch(action.type){
        // case ActionTypes.FETCH_ENGAGEMENT_BEGIN:{
        //     return {
        //         ...state,
        //         requestedEngagement: action.requestedEngagement,
        //         isFetching: action.isFetching
        //     }
        // }
        // break;
        // case ActionTypes.FETCH_ENGAGEMENT_COMPLETE:{
        //     return {
        //         ...state,
        //         engagement:action.engagement,
        //         requestedEngagement: action.requestedEngagement,
        //         isFetching: action.isFetching,
        //         error:action.error,
        //     }
        // }
        // break;
        // case ActionTypes.FETCH_ENGAGEMENT_ERROR:{
        //     return {
        //         ...state,
        //         requestedEngagement: action.requestedEngagement,
        //         isFetching: action.isFetching,
        //         error:action.error,
        //     }
        // }
        // break;
        default:
            return state;
    }
}