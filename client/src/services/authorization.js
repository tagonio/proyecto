const API_URL = process.env.REACT_APP_API_URL || "/api/v1";
const API_AUTH_URL = API_URL + "/auth";

export const handleLogin = async (email, password) => {

    const data = { email, password };

    const response = await fetch(API_AUTH_URL + "/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const jsonData = await response.json();

    if(jsonData.error)
        throw jsonData.error;

    const body = jsonData.body;

    const {token} = body;

    if(!token)
        throw "Its necessary a token in the response";
    
    saveToken(token);

    return jsonData.message;
}

export const handleRegister = async (userData) => {

    const response = await fetch(API_AUTH_URL + "/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const jsonData = await response.json();

    console.log(jsonData);

    if (jsonData.error)
        throw jsonData.error;

    return jsonData.message;
}

export const saveToken = (token)=>{
    localStorage.setItem('token',token);
}

export const getToken = ()=>{
    localStorage.getItem('token');
}

