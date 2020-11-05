export const addPlate = (plate) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const authorId = getState().firebase.auth.uid
  
      firestore
        .collection("plates")
        .add({
          ...plate,
          authorId: authorId,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_PLATE",
            plate,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_PLATE_ERR",
            err,
          });
        });
    };
  };
  
  export const removePlate = (plate) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("plates")
        .doc(plate.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_PLATE",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_PLATE_ERR",
            err,
          });
        });
    };
  };
  
  export const toggleChecked = (plate) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
  
      firestore
        .collection("plates")
        .doc(plate.id)
        .set(
          {
            ...plate,
            checked: !plate.checked,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "TOGGLE_CHECKED",
            plate,
          });
        })
        .catch((err) => {
          dispatch({
            type: "TOGGLE_CHECKED_ERR",
            err,
          });
        });
    };
  };