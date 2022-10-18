import { AUTH_LOGIN, AUTH_SIGNUP, GET_CREDIT, GET_SCOPE, GET_SUBSCRIBATION, GET_USER, LOADING } from "../constants/action";



const initialState = {
  user: [],
  loading:false,
  scope:[],
  subscribation:[],
  credit:0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      }; 
      case AUTH_LOGIN:
      return {
        ...state,
      }; 
    case AUTH_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_SCOPE:
      return {
        ...state,
        scope: action.payload,
      };
      
    case GET_SUBSCRIBATION:
      return {
        ...state,
        subscribation: action.payload,
      };
      
    case GET_CREDIT:
      return {
        ...state,
        credit: action.payload,
      };
      

    default:
      return state;
  }
}
