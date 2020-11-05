import React, { Component } from "react";
import { addPlate } from "../../actions/plateActions";
import { connect } from "react-redux";

class AddPlate extends Component {
  state = {
    plate: "",
    checked: "false",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlate(this.state);
    document.getElementById("addPlateForm").reset();
    console.log(this.state);
  };


  render() {
    return (
      <>
        <form
          id="addPlateForm"
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend> </legend>
          <div className="form-group">
            <h4><label htmlFor="plate">Add a plate</label> </h4>   
            <input
              type="text"
              className="form-control"
              id="plate"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPlate: (plate) => dispatch(addPlate(plate)),
  };
};
export default connect(null, mapDispatchToProps)(AddPlate);