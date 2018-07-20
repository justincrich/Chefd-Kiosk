import React, {Component} from 'react'
import {Button} from 'chefd-core-components';
import {SectionHeading, Field} from '../../base_components/base_components'
import validate from '../../../tools/validator'

import _ from 'lodash'
import './styling.scss'

export default class RegisterRequestForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            emailError:false
        }
        this.submit = this.submit.bind(this);
        
    }

    submit(){
        
        let entries = _.pick(this.state,['email']);
        
        if(this.validateEntries(entries)){
            this.props.addContact(this.state.email)
            this.setState({emailError:false})
        }
            
    }

    validateEntries(entries){
        let invalid = new Set();
        for(let key in entries){
            if(!validate(entries[key],key)) invalid.add(key);
        }
        if(invalid.size){
            this.showErrorMessage(invalid);
            return false;
        }
        else return true;
    }

    showErrorMessage(errors){
        this.setState({emailError:true})
    }

    render(){
        console.log(Button)
        return(
            
            <form className='regreqform'>
                <SectionHeading>
                    Get Chef'd
                </SectionHeading>
                <Field 
                        className={`emailInput ${this.state.emailError?'error':''}`}
                        name="customer[email]"
                        id='Email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}
                />
                {/* <Button
                    id='regreqform-submit'
                    className='regreqform-submit'
                    value='submit'
                    name='Submit'
                    onClick={this.submit}
                    accented={true}
                >
                    Submit
                </Button> */}
                <Button>123</Button>
            </form>
        )
    }
}