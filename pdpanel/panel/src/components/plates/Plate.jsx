import React from "react";
import moment from "moment";
import { removePlate } from "../../actions/plateActions";
import { connect } from "react-redux";
import Check from "./Check";
import { toggleChecked } from "../../actions/plateActions";

const Plate = ({ plate, removePlate, toggleChecked }) => {
  const handleRemove = (plate) => {
    removePlate(plate);
  };

  const handleCheck = (plate) => {
    toggleChecked(plate);
  };

  return (
    <>
      <tr>
        <th>{plate.plate}</th>
        <td>{moment(plate.date.toDate()).calendar()}</td>
        <td>
          <Check onClick={() => handleCheck(plate)} checked={plate.checked} />
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(plate)}
          >
             <i class="fas fa-trash"></i>
          </span>
        </td>
      </tr>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removePlate: (plate) => dispatch(removePlate(plate)),
    toggleChecked: (plate) => dispatch(toggleChecked(plate)),
  };
};
export default connect(null, mapDispatchToProps)(Plate);