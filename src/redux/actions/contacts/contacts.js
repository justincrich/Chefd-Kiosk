import ActionTypeRepo from 'central-state/action-types.js';
//import 'isomorphic-fetch'
//const url = process.env.NODE_ENV === 'production'? `${process.env.REACT_APP_CORDIAL_API}/contacts`: 'http://localhost:3000/contacts';
const ActionTypes = ActionTypeRepo.contact;

// const token = `Basic ${process.env.REACT_APP_CORDIAL_TOKEN}`;
console.log(ActionTypes)
const addContactBegin =(emailAddress)=>{
    return{
        type:ActionTypes.ADD_CONTACT_BEGIN,
        email:emailAddress,
        isFetching:true
    }
}

const addContactComplete = ()=>{
    return{
        type: ActionTypes.ADD_CONTACT_COMPLETE,
        email:null,
        isFetching:false,
        error:null
    }
}

// const addContactError = (error) =>{
//     return{
//         type: ActionTypes.ADD_CONTACT_ERROR,
//         isFetching:false,
//         error:error
//     }
// }
// //cordial is synchronous ... add back if you need async solution ... NOT FINISHED
// const addContact = values => dispatch =>
//     new Promise(async function (res,rej){
//         const {cordial} = window;
//         const {email,subscribed,retailer,location,persona,results} = values;
//         dispatch(addContactBegin(email));
//         cordial.identify(email);
//         let contact = {
//             channels:{
//                 email:{
//                     subscribeStatus:"subscribed",
//                     invalid:false
//                 }
//             },
//             Chefd_Kiosk:true
//         }
//         const res = cordial.contact(JSON.stringify(contact))
//         dispatch(addContactComplete())
//     })

// const addContact = 0;

const addContact = values => dispatch => {
    const {cordial} = window;
    const {email,subscribed} = values;
    const isSubscribed = subscribed?"subscribed":"none";
    dispatch(addContactBegin(email));
    
     cordial.identify(email);
    
    let contact = {
        channels:{
            email:{
                address:email,
                subscribeStatus:isSubscribed,
                invalid:false
            }
        },
        Chefd_Kiosk:true
        // "engage_location":{lat:location.lat,lon:location.long},
        // "engage_retailer":retailer,
        // "engage_result":result,
        // "engage_responses":Object.values(responses)
    }
cordial.contact(contact,{'upsert':false})
console.log(cordial,values,contact)
    dispatch(addContactComplete())
}

// function addContact (values){
//     const {cordial} = window;
//     const {email,subscribed,retailer,location,result,responses} = values;
//     return function (dispatch){
//         dispatch(addContactBegin(email));
//         cordial.identify(email);
//         let contact = {
//             channels:{
//                 email:{
//                     subscribeStatus:subscribed?"subscribed":"none",
//                     invalid:false
//                 }
//             },
//             Chefd_Kiosk:true,
//             "engage_location":{lat:location.lat,lon:location.long},
//             "engage_retailer":retailer,
//             "engage_result":result,
//             "engage_responses":Object.values(responses)
//         }
//         const res = cordial.contact(JSON.stringify(contact))
//         dispatch(addContactComplete())
//         // let init = {
//         //     method:'POST',
//         //     headers:new Headers({
//         //         "Authorization":token,
//         //         "Accept":"application/json",
//         //         "Content-Type":"application/json"
//         //     }),
//         //     body:JSON.stringify({
//         //         "channels":{
//         //             "email":{
//         //                 "address":emailAddress,
//         //                 "subscribeStatus":"subscribed",
//         //                 "invalid":false
//         //             }
//         //         },
//         //         "Chefd_Kiosk":true
//         //     })
//         // }

//         // let request = new Request(url,init)
//         // return fetch(request)
//         // .then((response)=>{
//         //     if(response.ok) dispatch(addContactComplete())
//         //     else throw new Error(response.statusText)
//         // })
//         // .catch(error=>{
//         //     //console.error('Error: ',error.message)
//         //     dispatch(addContactError(error))
            
//         // });

        
//     }
// }


export default {
    addContact
}


