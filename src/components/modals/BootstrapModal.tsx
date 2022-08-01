import * as React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IProps {}
interface IState {
  showModal: boolean;
}

export default class BootstrapModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  state: IState = {
    showModal: false,
  };

  handleClose() {
    this.setState(
      {
        showModal: !this.state.showModal,
      }
    );
  }
  render() {
    return (
      <>
        <div>
          <Button size="lg" variant="primary" onClick={this.handleClose}>Click</Button>
        </div>
        <div className="bootstrap-modal-container">
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton={this.state.showModal}>
              Modal header
            </Modal.Header>
            <Button variant="primary" onClick={this.handleClose}>
              Close it
            </Button>
          </Modal>
        </div>
      </>
    );
  }
}
