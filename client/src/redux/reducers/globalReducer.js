import { CHANGE_DARK_THEME, CHANGE_LOGGED_IN } from "../constants/globalConstants";


export const globalReducer = (state, action) => {

    switch (action.type) {
        case CHANGE_DARK_THEME:
            return {
                ...state,
                darkTheme: action.payload
            };
        case CHANGE_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }

}