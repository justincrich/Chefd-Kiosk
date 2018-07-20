import React,{Component} from 'react';
import Button from 'core-components/buttons/standard/button_standard.js';
import Input from 'core-components/input/standard/input_text_standard.js';
import './opt-in.scss';
export default class OptInPage extends Component{
    constructor(props){
        super(props);
        this.state={
            error:false
        };
        this.submit = this.submit.bind(this)
        
    }

    componentDidMount(){

    }

    submit(email){
        console.log('before eval',email)
        if(this.isEmailValid(email)){
            this.setState({error:false})
            this.props.submitEmail(email);
            
        }else{
            this.setState({error:true})
        }
    }

    isEmailValid(text){  
        if(text || !text==='') return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(text);
        else return false;
    }



    render(){
        return(
            <div
                className='optinpage'
            >
                <h1
                    className='optinpage_header'
                >
                    You're Almost There!
                </h1>
                <span
                    className='optinpage_description'
                >
                    Enter your email to view your score.
                </span>
                <div
                    className='optinpage_form'
                >
                    <Input
                        onChange={(e)=>this.setState({emailValue:e.target.value})}
                        value={this.state.emailValue}
                        type={'email'}
                        error={this.state.error}
                        placeholder='Email'
                    />
                    <Button
                        onClick={(e)=>{
                            e.preventDefault();
                            this.submit(this.state.emailValue)
                        }}
                    >
                        See My Score
                    </Button>
                </div>
                {this.state.error&&<span class='optinpage_form_errornote'>Please Enter Your Email To Continue</span>}
            </div>
        )
    }
}