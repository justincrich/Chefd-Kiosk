import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "core-components/buttons/standard/button_standard.js";
import "./modal_standard.scss";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      objRef: null
    };
    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  static defaultProps = {
    description: "",
    acceptTxt: "Cancel",
    rejectTxt: "Submit"
  };
  componentWillMount() {
    if (!this.props.title) {
      throw new Error("Modal: no title included in modal.");
    }
  }
  componentWillReceiveProps({ open = false }) {
    if (open) {
      this.toggleModal(true);
    } else {
      this.toggleModal(false);
    }
  }

  componentDidUpdate() {
    if (this.state.isModalOpen && !this.state.objRef) {
      const node = document.getElementsByClassName("modalstandard_window")[0];
      document.addEventListener("mousedown", this.handleClickOutside);
      this.setState({ objRef: node });
    } else if (!this.state.isModalOpen && this.state.objRef) {
      document.removeEventListener("mousedown", this.handleClickOutside);
      this.setState({ objRef: null });
    }
  }

  handleClickOutside(event) {
    if (!this.state.objRef.contains(event.target)) {
      this.props.reject();
    }
  }
  toggleModal(state) {
    this.setState({ isModalOpen: state });
  }
  openModal() {
    return (
      <div className="modalstandard">
        <div className="modalstandard_container">
          <div className="modalstandard_backdrop" />
          <div className="modalstandard_window" id={this.props.id}>
            <div className="modalstandard_window_body">
              <h2 className="modalstandard_window_body_header">
                {this.props.title}
              </h2>
              <div className="modalstandard_window_body_description">
                {this.props.description}
              </div>
              <div className="modalstandard_window_body_buttonbox">
                <Button
                  id="continue"
                  className="modalstandard_window_body_buttonbox_button"
                  onClick={this.props.reject}
                >
                  {this.props.rejectTxt}
                </Button>
                <Button
                  outlined
                  id="quit"
                  className="modalstandard_window_body_buttonbox_button"
                  onClick={this.props.accept}
                >
                  {this.props.acceptTxt}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.state.isModalOpen ? this.openModal() : <div />}</div>;
  }
}
Modal.propTypes = {
  id: propTypes.string,
  acceptTxt: propTypes.string,
  rejectTxt: propTypes.string,
  description: propTypes.string,
  title: propTypes.string.isRequired
};
