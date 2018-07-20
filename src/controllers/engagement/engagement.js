import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionRepo from "central-state/actions";
import KioskBody from "components/kiosk-body/kiosk-body";
import EngagementPage from "pages/engagement/engagement";
import Modal from "core-components/modals/modal_standard/modal_standard.js";
import Analyzer from "resources/responseAnalyzer.js";
const { Engagement: EngagementActions } = ActionRepo;
class EngagementController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalViewable: false
    };
    this.getEngagement = this.getEngagement.bind(this);
    this.navToMainMenu = this.navToMainMenu.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.assessResponses = this.assessResponses.bind(this);
    this.submit = this.submit.bind(this);
  }
  async componentWillMount() {
    const {
      location: { state },
      match: { params: { engagement: id } }
    } = this.props;
    let engagement;
    //splitting out so that if someone navs directly to the engagement they can do it
    if (state) {
      engagement = state.engagement;
      console.log(engagement);
    } else {
      //if engagement not received retrieve engagement
      const { fetchEngagement } = this.props.Actions.Engagement;
      try {
        console.log(id);
        engagement = await fetchEngagement(id);
        console.log("engagement", engagement);
      } catch (e) {
        console.error(`Engagement Controller Error: ${e.message}`);
      }
    }

    this.setState({ engagement: id, engagementData: engagement });
  }

  async getEngagement(id) {}
  navToMainMenu() {
    const {
      location: { state: { previous } = {} },
      goBack,
      push
    } = this.props.history;
    if (!previous) {
      push("/");
    } else {
      goBack();
    }
  }

  toggleModal() {
    this.setState({ modalViewable: !this.state.modalViewable });
  }
  assessResponses(responses) {
    // const {questions} = this.state.engagementData;
    const { engagement, engagementData: { questions } } = this.state;
    //const result = analyzer(questions, Object.values(responses), engagement);
    const {getProfile, getTriviaResult} = new Analyzer(questions,Object.values(responses));
    let result;
    if(engagement==='foodie') result = getProfile();
    else if(engagement==='foodtrivia') result = getTriviaResult();
    this.submit(responses, result);
  }
  submit(responses, result) {
    const { history: { push } } = this.props;
    const {engagement} = this.state;
    push({
      pathname: "/opt-in",
      state: {
        responses,
        result,
        engagement
      }
    });
  }
  render() {
    const { engagementData, modalViewable } = this.state;

    return (
      <KioskBody>
        {engagementData && (
          <EngagementPage
            data={engagementData}
            exit={this.toggleModal}
            assessResponses={this.assessResponses}
          />
        )}
        <Modal
          open={modalViewable}
          reject={this.toggleModal}
          accept={this.navToMainMenu}
          title="Are You Sure You Want To Quit"
          description="You’ve come so far! Just a few more taps to get to the good stuff."
          rejectTxt="Continue"
          acceptTxt="Yes, Quit"
        />
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
      Engagement: bindActionCreators(EngagementActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(
  EngagementController
);
