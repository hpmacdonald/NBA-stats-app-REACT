import {
    GET_TEAM,
    GET_TEAM_SUCCESS,
    GET_TEAM_FAIL
} from "../actions/actionTypes";

const initialState = {
    player: {},
    _loading: false,
    error: ""
};

function teamReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TEAM:
            return {
                ...state,
                _loading: true
            };
        case GET_TEAM_SUCCESS:
            return {
                ...state,
                team: { ...action.payload },
                _loading: false
            };
        case GET_TEAM_FAIL:
            return {
                ...state,
                _loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default teamReducer