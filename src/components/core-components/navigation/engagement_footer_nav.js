import React, {Component} from 'react';
import './engagement_footer_nav.scss';

export default class EngagementFooterNav extends Component{

    constructor(props){
        super(props);
        this.state={
            currentQuestionId:null
        }
        this.nav = this.nav.bind(this);
        this.getCountUI = this.getCountUI.bind(this);
    }

    componentWillMount(){

        if(this.props.currentQuestion){
            this.parseID(this.props.currentQuestion);
        }
    }

    componentWillReceiveProps({currentQuestion:newCurrentQuestion}){
 
        //const {currentQuestion:newCurrentQuestion} = this.props;
        if(newCurrentQuestion){
            this.parseID(newCurrentQuestion);
        }
    }

    nav(previousQuestion){
        this.props.jumpToQuestion(previousQuestion)
    }
    parseID(id){
        const idInt = parseInt(id.substr(-1),10)
        if(!idInt){
            throw new Error('NavBar: question ID cannot be parsed')
        }else{
            const prevInt= idInt-1;
            const prevQuestionId = `q-${prevInt}`
            this.setState({
                qInt:idInt,
                currentQuestionId:id,
                prevInt:prevInt,
                prevQuestionId:prevQuestionId
            })
        }
    }

    getCountUI(){
        const {qInt,prevQuestionId,prevInt} = this.state;
        return (
            <div>
                <div
                className='engagementFooterNav_back'
                onClick={()=>this.nav(prevQuestionId)}
                >
                    {
                        qInt !== 1&&
                        `Back to question #${prevInt}`
                    }
                </div>
                <div
                    className='engagementFooterNav_questioncount'
                >
                    Question {qInt} of 5
                </div>
            </div>
        )
    }

    render(){
        
        
        return(
            <div className='engagementFooterNav'>
                <div className='engagementFooterNav_container'>
                    {
                        this.state.currentQuestionId&&
                        this.getCountUI()
                    }
                    <div
                        className='engagementFooterNav_quit'
                        onClick={this.props.exit}
                    >
                        Exit
                    </div>
                </div>
            </div>
        )
    }
}