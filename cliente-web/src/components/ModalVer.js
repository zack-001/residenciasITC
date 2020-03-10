import React from "react";
import PropTypes from "prop-types";

export default class ModalVer extends React.Component {
  /*onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };*/
  render() {

    return (
<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Ver</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div>{this.props.children}</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



      /*
      <div className="modal fade" id="myModal">
        <div className="modal-content">
        <h2>Modal Window</h2>
        <div >{this.props.children}</div>
        <div className="modal-footer">
        <button type="button" className="close"  data-dismiss="modal">Close</button>
      </div>
      </div>
      </div>*/
    );
  }
}
/*ModalVer.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};*/