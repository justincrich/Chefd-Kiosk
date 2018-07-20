import React, { Component } from "react";
import "./start.scss";
import KioskBody from "components/kiosk-body/kiosk-body";
import foodieTypeImg from "assets/png/master-chef-d-3192-4.png";
import triviaImg1 from "assets/png/ada-shr-1-2-hero-raw.png";
import triviaImg2 from "assets/png/thai-beef-salad-5.png";
import triviaImg3 from "assets/png/beef-80-2-hero-raw-1.png";
import triviaImg4 from "assets/png/nyt-chk-8-2-hero-raw.png";
import Button from "core-components/buttons/standard/button_standard.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionRepo from "central-state/actions";
const { Engagement: EngagementActions } = ActionRepo;

class StartController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.startEngagement = this.startEngagement.bind(this);
  }

  async startEngagement(event,engagementId) {
    event.preventDefault();
    const { Actions:{EngagementActions:{fetchEngagement}}, history } = this.props;
    try{
      const engagement = await fetchEngagement(engagementId);
      history.push({
        pathname: `/engagement/${engagementId}`,
        state: { engagement: engagement,
                id:engagementId
              }

      });
    }catch (e){
      console.error(e)
    }
  }

  getDestination(destination){
    return {
      pathname: `/engagement/${destination}`,
      state: {
        engagement: destination,
        previous:'/'
      }
    }
  }

  render() {
    return (
      <KioskBody>
        <div className="kiosk_start_body">
          <div className="start_quiz foodie_quiz">
            <div className="start_quiz_description">
              <div className="start_quiz_description_headline foodie_quiz_headline">
                What Type of Foodie are You?
              </div>
              <p className="start_quiz_description_paragraph">
                Are you the foodie of your friend group? See what type of foodie
                you are by answering these 5 questions.
              </p>
            </div>
            <div className="start_quiz_description_img">
              <img src={foodieTypeImg} alt='Foodie Engagement'/>
            </div>
            <Button
              className="start_quiz_description_button"
              
              onClick={(e)=>this.startEngagement(e,'foodie')}
            >
              Start
            </Button>
            <div className="start_quiz_description_questioncount">
              5 questions
            </div>
          </div>
          <div className="start_quiz food_trivia">
            <div className="start_quiz_description">
              <div className="start_quiz_description_headline food_trivia_headline">
                Food Trivia
              </div>
              <p className="start_quiz_description_paragraph">
                Are you the foodie of your friend group? See what type of foodie
                you are by answering these 5 questions.
              </p>
            </div>
            <div className="start_quiz_description_img img_grid">
              <img src={triviaImg1} alt='food_trivia'/>
              <img src={triviaImg2} alt='food_trivia'/>
              <img src={triviaImg3} alt='food_trivia'/>
              <img src={triviaImg4} alt='food_trivia'/>
            </div>
            <Button
              className="start_quiz_description_button"
              onClick={(e)=>this.startEngagement(e,'foodtrivia')}
            >
              Start
            </Button>
            <div className="start_quiz_description_questioncount">
              3 questions
            </div>
          </div>
        </div>
      </KioskBody>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const matchDispatchToProps = dispatch => {
  return {
    Actions: {
      EngagementActions:bindActionCreators(EngagementActions, dispatch)}
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(StartController);
