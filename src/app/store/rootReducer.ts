import { firebaseReducer as firebase } from "react-redux-firebase";
import { firestoreReducer as firestore } from "redux-firestore";

// import counter from "../../features/counter/counterSlice";

const rootReducer = {
  // counter,
  firebase,
  firestore: firestore as any,
};

export type AppState = typeof rootReducer;

export default rootReducer;
