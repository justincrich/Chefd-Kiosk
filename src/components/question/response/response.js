import React, { Component } from "react";
import RoundCheckbox from "components/core-components/input/checkbox/round/input_checkbox_round.js";
import "./response.scss";
export default class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }


  render() {
    const { id, response, assetId } = this.props;
    const imgName = response.img;

    return (
      <li key={id} id={id} className="response_container">
        <div className="response_title">{response.title}</div>
        <div
          className={"response_selection"}
          onClick={() => this.props.onClick(id)}
        >
          {imgName && (
            <div className="response_image_container">
              <img
                src={require("assets/png/questions/" + assetId + "/" + imgName["1x"]) }
                alt="question"
              />
            </div>
          )}
          <div className={"response_check_container"}>
            <RoundCheckbox value={id} checked={this.props.isSelected} />
          </div>
        </div>
      </li>
    );
  }
}
