import { firebaseReducer as firebase } from "react-redux-firebase";
import { firestoreReducer as firestore } from "redux-firestore";

import counter from "../../features/counter/counterSlice";

const rootReducer = {
  counter,
  firebase,
  firestore,
};

export default rootReducer;
