import React, { Component } from "react";
import KioskBody from "components/kiosk-body/kiosk-body";
import "./results.scss";
import Button from "core-components/buttons/standard/button_standard";
export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRecommmendations(recommendations) {
    return recommendations.map(
      ({ imageName, title, avaliability, url }, index) => (
        <div key={index} className="results_recommendation">
          <img
            src={require("assets/png/recommendations/" + imageName)}
            alt="recommendation"
          />
          <div className="results_recommendation_title">{title}</div>
          <div className="results_recommendation_actioncontainer">
            {avaliability === "instore" ? (
              <div className="results_recommendation_action_instore">
                <div className="results_recommendation_action_instore_cta">
                  Buy It Now!
                </div>
                <div className="results_recommendation_action_instore_ctadescription">
                  <div>While Supplies last.</div>
                  <div>Check shelf to left</div>
                </div>
              </div>
            ) : (
              <div className="results_recommendation_action_online">
                <Button
                  external
                  className="results_recommendation_action_button"
                  href={url}
                  target={"_blank"}
                >
                  Order Online
                </Button>
              </div>
            )}
          </div>
        </div>
      )
    );
  }

  render() {
    const {
      result: { description, title, recommendations, score = 0 },
      engagement
    } = this.props;

    return (
      <KioskBody>
        <div className="results">
          {engagement === "foodtrivia" && (
            <div className="results_score">Score {score}/3</div>
          )}
          <h1>{title}</h1>
          <div className="results_description">{description}</div>
          <div className="results_recommendations">
            {recommendations.length > 0 &&
              this.getRecommmendations(recommendations)}
          </div>
        </div>
      </KioskBody>
    );
  }
}
