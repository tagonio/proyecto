import { CHANGE_DARK_THEME, CHANGE_LOGGED_IN } from "../constants/globalConstants"


export const changeDarkMode = (darkMode)=>{
    return {
        type: CHANGE_DARK_THEME,
        payload: darkMode
    };
}

export const changeLoggedIn = (isLoggedIn) =>{
    return {
        type: CHANGE_LOGGED_IN,
        payload: isLoggedIn,
    };
}