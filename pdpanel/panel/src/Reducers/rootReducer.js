import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import plateReducer from "./plateReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  plate: plateReducer,
  auth: authReducer
});

export default rootReducer;