import React, {Component} from 'react';

import Question from 'components/question/question.js';
import EngagementFooterNav from 'components/core-components/navigation/engagement_footer_nav.js';

import Button from 'core-components/buttons/standard/button_standard.js';

import './engagement.scss';
export default class EngagementPage extends Component{
    constructor(props){
        super(props);
        this.state={
            responses:{},
            questionLocation:'q-1',
            finished:false,
            warning:false
        }
        this.getQuestions = this.getQuestions.bind(this);
        this.setActiveQuestion = this.setActiveQuestion.bind(this);
        this.jumpToQuestion = this.jumpToQuestion.bind(this);
        this.setResponse = this.setResponse.bind(this);
        this.submit = this.submit.bind(this);
        this.checkIfUpdated = this.checkIfUpdated.bind(this);
    }

    getQuestions(questions,assetId){
        //let question = questions[0];
        
        return questions.map((question,index)=>{
            const {id, questionText,type,responses, questionImg} = question;
            return (
                    <Question
                        key={id}
                        id={id}
                        index={index}
                        question={questionText}
                        type={type}
                        responses={responses}
                        assetId={assetId}
                        questionImg={questionImg}
                        setActiveQuestion={(activeQuestionId)=>this.setState({questionLocation:activeQuestionId})}
                        setPastQuestion={(pastQuestionId)=>this.setState({pastLocation:pastQuestionId})}
                        setResponse={this.setResponse}
                    />
            )
        })
    }

    setActiveQuestion(questionId,node){
        this.setState({questionLocation:questionId})
        
    }

    jumpToQuestion(questionID){
        if(questionID!=='q-0'){
            document.getElementById(questionID)
            .scrollIntoView({
                behavior:"smooth"
            })
        }
    }

    setResponse(responseObject){
        let {questionId,responseId} = responseObject;
        let resp = {};
        resp[questionId] = responseId;
        this.setState({
            responses:{
                ...this.state.responses,
                ...resp
            }
        })
        
    }

    submit(e){
        e.preventDefault();
        const {finished,responses} = this.state;
        if(!finished){
            this.setState({warning:true})
        }else{
            this.props.assessResponses(responses)
        }
    }

    checkIfUpdated(newResponseCount){
        const {data:{questions}} = this.props;
        if(newResponseCount === questions.length){
            this.setState({finished:true})
        }
    }

    componentWillUpdate(nextProps,nextState){
        const {responses} = this.state;
        const {responses:nextResponses} = nextState;
        const newResponseCount = Object.keys(nextResponses).length;
        if(Object.keys(responses).length !== newResponseCount){
            this.checkIfUpdated(newResponseCount)
        }
    }

    render(){
        const {data:{title,description,questions,assetId}} = this.props;
        return(
            <div className='engagementpage'>

                <div className='engagementpage_details'>
                    <h1 className='engagementpage_h1'>
                        {title}
                    </h1>
                    <div className='engagementpage_description'>
                        {description}
                    </div>
                </div>
                <ul className='engagementpage_questions'>
                    {this.getQuestions(questions,assetId)}
                </ul>

                <div
                    className='engagementpage_buttonbox'
                >
                    
                    <Button
                        className='engagementpage_submitbtn'
                        onClick={this.submit}
                        style={{
                            width:'200px'
                        }}
                    >
                        See My Results
                    </Button>
                    {this.state.warning&&<span>Please Finish All Questions To Continue</span>}
                </div>

                <EngagementFooterNav 
                    currentQuestion={this.state.questionLocation} 
                    pastQuestion={this.state.pastLocation}
                    total={questions.length}
                    jumpToQuestion={this.jumpToQuestion}
                    exit={this.props.exit}    
                />
            </div>
        )
    }
}