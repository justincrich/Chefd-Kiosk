
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Actions from './contacts'
import * as ActionTypes from '../../action-types'
import * as InitialStates from '../../reducers/initialStates'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

xdescribe('Contact Actions',function(){
    const url = 'http://localhost:3000/contacts'
    const token = `Basic ${process.env.REACT_APP_CORDIAL_TOKEN}`;
    const headers = {
        "Authorization": token,
        "Accept":"application/json",
        "Content-Type":"application/json"
    }


    describe('addContact',function(){

        const email = "test@chefd.com";
        const body = {
            channels:{
                email:{
                    address: email,
                    subscribeStatus:"subscribed",
                    invalid:false
                }
            },
            Chefd_Kiosk:true,
        }
        const mockRequest = {
            body:JSON.stringify(body),
            headers: headers,
            status:200,
            statusText:'OK',
            sendAsJson:false
        }
        const mockResponse = {
            "success": true,
            "message": "contact updated",
            "cID": "5a4fdb5c132f37e60ef81ec2",
            'ok':true
        }
        

        test('Calls ADD_CONTACT_BEGIN when fetching',()=>{
            global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve(mockResponse));
            const expectedActions = 
            [{
                type:ActionTypes.ADD_CONTACT_BEGIN,
                email: email,
                isFetching:true

            }];
            
            const store = mockStore(InitialStates.contacts)
            return store.dispatch(Actions.addContact( email)).then(()=>{
                let actions = store.getActions();
                expect(actions).toEqual(expect.arrayContaining(expectedActions));
                

            })
            
        })

        test('Calls ADD_CONTACT_END when fetching',()=>{
            global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve(mockResponse));

            const expectedActions = 
            [{
                type:ActionTypes.ADD_CONTACT_COMPLETE,
                email: null,
                isFetching:false,
                error:null
            }];

            const store = mockStore(InitialStates.contacts)
            return store.dispatch(Actions.addContact(email)).then(()=>{
                let actions = store.getActions();
                expect(actions).toEqual(expect.arrayContaining(expectedActions));
            })

        })

        test('Calls ADD_CONTACT_ERROR when ERROR',()=>{
            const errResponse = {
                "success": false,
                "message": "Unauthorized",
                'ok':false
            }
            global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve(errResponse));
            const expectedActions = 
            [{
                type:ActionTypes.ADD_CONTACT_ERROR,
                isFetching:false,
                error:new Error()
            }];
            
            

            const store = mockStore(InitialStates.contacts)
            return store.dispatch(Actions.addContact(email)).then(()=>{
                let actions = store.getActions();
                expect(actions).toEqual(expect.arrayContaining(expectedActions));
            })

        })
    })
})

