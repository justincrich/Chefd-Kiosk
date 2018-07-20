import ActionTypeRepo from 'central-state/action-types.js';
const {engagement:ActionTypes} = ActionTypeRepo;
const fetchEngagementBegin = engagementId => {
  return {
    type: ActionTypes.FETCH_ENGAGEMENT_BEGIN,
    requestedEngagement: engagementId,
    isFetching: true
  };
};

const fetchEngagementError = error => {
  return {
    type: ActionTypes.FETCH_ENGAGEMENT_ERROR,
    error: error,
    isFetching: false
  };
};

const fetchEngagementComplete = engagement => {
  return {
    type: ActionTypes.FETCH_ENGAGEMENT_COMPLETE,
    engagement: engagement,
    requestedEngagement: null,
    isFetching: false,
    error: null
  };
};


const fetchEngagement = engagementId => dispatch =>
  new Promise(async function(res, rej) {
    dispatch(fetchEngagementBegin(engagementId));
    try{

      const returnedData = await fetch(`/api/engagement/${engagementId}`);
      const data = await returnedData.json();
      dispatch(fetchEngagementComplete(data));
      res(data)
    }catch(error){
        dispatch(fetchEngagementError(new Error(error.message)))
        rej(error)
    }
  });


// const fetchEngagement = engagementId => {
//   return async function(dispatch) {
//     dispatch(fetchEngagementBegin(engagementId));
//     try{

//         const returnedData = await fetch(`/api/engagement/${engagementId}`);
//         const data = await returnedData.json();
//         dispatch(fetchEngagementComplete(data));
//     }catch(error){
//         dispatch(fetchEngagementError(new Error(error.message)))
//     }
//   };
// };

export default {
    fetchEngagement
}
