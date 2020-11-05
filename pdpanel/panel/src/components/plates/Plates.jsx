import React from "react";
import Plate from "./Plate";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";



const Plates = ({ plates }) => {

 

  
  return (
    <>
    
      <table
        className="table table-light container"
        style={{ marginTop: "100px" }}
      >    
        <thead>
          <tr className="text-info">
            <th scope="col">PLATES</th>
            <th scope="col">ARRIVAL TIME</th>
            <th scope="col">WHITELIST</th>
            <th scope="col">DELETE</th>

          </tr>
        </thead>
        <tbody>
          {plates && plates.map((plate) => 
          <Plate plate={plate} key={plate.id} />
          )}
        </tbody>
      </table>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  const plates = state.firestore.ordered.plates;
  return {
    plates: plates,
    uid: state.firebase.auth.uid
  };
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "plates",
      
      orderBy: ["date", "desc"],
    },
  ])
)(Plates);