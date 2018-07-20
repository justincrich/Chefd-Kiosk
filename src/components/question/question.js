import "./question.scss";
import React, { Component } from "react";
import Response from "./response/response";
import Waypoint from "react-waypoint";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: -1
    };
    this.getResponses = this.getResponses.bind(this);
    this.setResponse = this.setResponse.bind(this);
  }

  setResponse(value) {
    this.setState({ selection: value });
    this.props.setResponse({ questionId: this.props.id, responseId: value });
  }

  getResponses(responses, assetId) {
    return responses.map((response, index) => {
      const { id } = response;
      return (
        <Response
          key={id}
          response={response}
          index={index}
          id={id}
          questionId={this.props.id}
          assetId={assetId}
          onClick={this.setResponse}
          isSelected={this.state.selection === id ? true : false}
        />
      );
    });
  }

  render() {
    const {
      id,
      index,
      question,
      responses,
      assetId,
      questionImg
    } = this.props;
    return (
      <li key={id} id={id} className="question_container">
      <div className="question_questionHeader">
      <h2 className="question_questionText">{`${index + 1}. ${question}`}</h2>
      {
            questionImg &&
            <div
              className="question_ImgContainer"
            >
              <img 
              className="question_Img"
              src={require('assets/png/questions/'+assetId+'/'+questionImg)}
              alt='question_Img'
              />
            </div>
          }
      </div>
        
        <Waypoint
          onEnter={() => this.props.setActiveQuestion(id)}
          fireOnRapidScroll={true}
          bottomOffset={160}
        >
          
          <ul className="question_responses">
            {this.getResponses(responses, assetId)}
          </ul>

        </Waypoint>
      </li>
    );
  }
}

//onLoad={()=>this.props.setNodePosition(ReactDOM.findDOMNode(this).getBoundingClientRect().y)}
