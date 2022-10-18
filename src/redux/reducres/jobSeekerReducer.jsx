import { UPDATE_PROFILE, GET_ALLPOST, GET_APPLIEDJOB } from "../constants/action";

const initialState = {
    allpost: [],
    appliedpost: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE:
            return {
                ...state,
            };
        case GET_ALLPOST:
            return {
                ...state,
                allpost: action.payload,
            };
        case GET_APPLIEDJOB:
            return {
                ...state,
                appliedpost: action.payload,
            };


        default:
            return state;
    }
}
