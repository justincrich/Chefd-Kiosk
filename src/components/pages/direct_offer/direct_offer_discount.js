import React, { Component } from "react";
import KioskBody from "components/kiosk-body/kiosk-body";
import Button from "core-components/buttons/standard/button_standard.js";
import Input from "core-components/input/standard/input_text_standard.js";
import Checkbox from "core-components/input/checkbox/standard/input_checkbox_standard";
import PrivacyPolicy from "./privacy_policy_component";
import "./direct_offer.scss";
export default class DirectOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      submitted: false,
      privacyPolicyVisible: false
    };
    this.submit = this.submit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.togglePrivacyPolicy = this.togglePrivacyPolicy.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.submitted === false && this.state.submitted === true) {
      setTimeout(this.resetForm, 5000);
    }
  }

  resetForm() {
    this.setState({ submitted: false, error: false, emailValue: "" });
  }

  submit(email) {
    if (this.isEmailValid(email)) {
      this.setState({ error: false, submitted: true });
    } else {
      this.setState({ error: true });
    }
  }

  isEmailValid(text) {
    if (text || !text === "")
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        text
      );
    else return false;
  }

  togglePrivacyPolicy(e) {
    e.preventDefault();
    this.setState({ privacyPolicyVisible: !this.state.privacyPolicyVisible });
    console.log("hii");
  }

  render() {
    return (
      <KioskBody>
        {!this.state.privacyPolicyVisible ? (
          <div className="direct_offer">
            <h1 className="direct_offer_header">Get $5 off Chef'd</h1>
            <div className="direct_offer_image">
              <img
                src={require("assets/png/meal_plan_landing_hero_image.png")}
              />
            </div>
            <div className="direct_offer_description">
              <span>Signup for the Chef'd newsletter and you'll get:</span>
              <ul>
                <li>
                  Exclusive deals, starting with <strong>$5 off</strong> your
                  meal today
                </li>
                <li>Announcement of new meals online and in-store</li>
                <li>Recipes and news from your favorite celebrity chefs</li>
              </ul>
            </div>
            {!this.state.submitted ? (
              <div className="direct_offer_form_container">
                <h3>Subscribe to Newsletter</h3>
                <div className="direct_offer_form">
                  <Input
                    onChange={e =>
                      this.setState({ emailValue: e.target.value })
                    }
                    value={this.state.emailValue}
                    type={"email"}
                    error={this.state.error}
                    placeholder="Email"
                  />

                  <Button
                    onClick={e => {
                      e.preventDefault();
                      this.submit(this.state.emailValue);
                    }}
                  >
                    Submit
                  </Button>
                </div>
                {this.state.error && (
                  <span class="direct_offer_form_errornote">
                    Please Enter Your Email
                  </span>
                )}
                <div className="direct_offer_form_consent">
                  {/* <Checkbox
                  checked={this.state.consented}
                  onClick={() =>
                    this.setState({ consented: !this.state.consented })
                  }
                /> */}
                  <div>
                    By clicking "Submit" you agree to our{" "}
                    <a
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ privacyPolicyVisible: true });
                      }}
                    >
                      privacy policy
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="direct_offer_confirmation">
                <div className="direct_offer_description">
                  Thank you for joining our newsletter. Your coupon is printing
                  below. You should also receive a confirmation email soon.
                </div>
                <div className="button">
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      this.setState({ submitted: false });
                    }}
                    outlined
                  >
                    Ok
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <PrivacyPolicy close={this.togglePrivacyPolicy} />
        )}
      </KioskBody>
    );
  }
}
