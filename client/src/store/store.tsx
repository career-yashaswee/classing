// import { createStore } from "redux";

// const initialState = {
//   classData: [],
//   isLoading: false,
//   error: null,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CLASS_REQUEST":
//       return { ...state, isLoading: true, error: null };
//     case "FETCH_CLASS_SUCCESS":
//       return { ...state, isLoading: false, classData: action.payload };
//     case "FETCH_CLASS_FAILURE":
//       return { ...state, isLoading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;
