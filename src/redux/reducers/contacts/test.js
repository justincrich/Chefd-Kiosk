import ContactReducer from './constacts'
import * as ActionTypes from '../../action-types'
import * as InitialStates from '../initialStates'

describe('Contact Reducers',()=>{
    let beginType = {
        type:ActionTypes.ADD_CONTACT_BEGIN,
        isFetching:true,
        email:"justin@chefd.com"
    }
    let beginExpectedOutput = {
        ...InitialStates.contacts,
        isFetching:true,
        email:"justin@chefd.com"
    }
    let endType = {
        type:ActionTypes.ADD_CONTACT_COMPLETE,
        isFetching:false,
        email:null,
        error:null
    }
    let endExpectedOutput = {
        ...InitialStates.contacts,
        isFetching:false,
        email:null,
        error:null
    }
    let errorType = {
        type: ActionTypes.ADD_CONTACT_ERROR,
        isFetching:false,
        error: new Error()
    }
    let errorExpectedOutput = {
        ...beginExpectedOutput,
        isFetching:false,
        error:new Error()
    }
    test('should return initial state',()=>{
        expect(ContactReducer(undefined,{})).toEqual(InitialStates.contacts)
    })
    test('handles ADD_CONTACT_BEGIN',()=>{

        expect(ContactReducer(undefined,beginType)).toEqual(beginExpectedOutput)
    })
    test('handles ADD_CONTACT_COMPLETE',()=>{
        expect(ContactReducer(beginExpectedOutput,endType)).toEqual(endExpectedOutput)
    })
    test('handles ADD_CONTACT_ERROR',()=>{
        expect(ContactReducer(beginExpectedOutput,errorType)).toEqual(errorExpectedOutput)
    })
})