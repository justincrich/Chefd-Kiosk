import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionRepo from "central-state/actions";
import Modal from "core-components/modals/modal_standard/modal_standard.js";
import KioskBody from "components/kiosk-body/kiosk-body";
import OptInPage from "components/pages/opt-in/opt-in.js";
import EngagementFooterNav from "core-components/navigation/engagement_footer_nav.js";
const { Contacts: ContactActions } = ActionRepo;

class OptInController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.setDefaultState = this.setDefaultState.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  componentWillMount() {
    //const {}
    //this.setState({})
    this.setDefaultState(this.props);
  }

  async setDefaultState(newProps) {
    const { location, history } = newProps;

    if (!location.state) {
      history.push("/");
    } else {
      let position = "not available";
      //   if (navigator.geolocation) {
      //     try {
      //       const location = await this.getPosition();
      //       position = {
      //         lat: location.coords.latitude,
      //         long: location.coords.longitude
      //       };
      //     } catch (e) {
      //       console.log("opt-in component: geo position not available");
      //     }
      //   }
      console.log('HERE"S OUR STATE', location.state);
      this.setState({
        responses: location.state.responses,
        location: position,
        result: location.state.result,
        engagement: location.state.engagement
      });
    }
  }

  getPosition(options = {}) {
    return new Promise(function(res, rej) {
      navigator.geolocation.getCurrentPosition(res, rej, options);
    });
  }

  async submitEmail(email) {
    // const request = {
    //     email,
    //     subscribed:true,
    //     retailer:'TestMcRetailer',
    //     location:this.state.location,
    //     result:this.state.result,
    //     responses:this.state.responses
    // }

    //this.props.Actions.Contact.addContact(request);
    try {
      const request = await fetch(
        `/api/results/${this.state.engagement}/${this.state.result}`
      );
      const resultData = await request.json();

      this.props.history.push({
        pathname: "/results",
        state: {
          resultData,
          engagement: this.state.engagement
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <KioskBody>
        <OptInPage submitEmail={this.submitEmail} />
        <Modal
          open={this.state.modalOpen}
          accept={() => this.history.push("/")}
          reject={() => this.setState({ modalOpen: false })}
          title="Are You Sure You Want To Quit"
          description="You’ve come so far! Just a few more taps to get to the good stuff."
          rejectTxt="Continue"
          acceptTxt="Yes, Quit"
        />
        <EngagementFooterNav exit={() => this.setState({ modalOpen: true })} />
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
      Contact: bindActionCreators(ContactActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(OptInController);
