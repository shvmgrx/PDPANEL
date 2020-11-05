
import React from "react";
import AddPlate from "../plates/AddPlate";
import Plates from "../plates/Plates";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <>
      <AddPlate />
      <Plates />
    </>
  );
};
const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
export default connect(mapStateToProps)(Dashboard);