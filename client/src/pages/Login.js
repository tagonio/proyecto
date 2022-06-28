import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import Layout from "../components/Layout";
import { handleLogin } from "../services/authorization";
import { AuthorizationContext } from "../context/authorization";
import { AppContext } from "../context/store";
import { changeLoggedIn } from "../redux/actions/globalActions";

function Login() {

    const { isLoggedIn, dispatch } = useContext(AppContext);

    // console.log(useContext(AuthorizationContext));

    const [hasErrorLogin, setHasErrorLogin] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();


        handleLogin(email, password)
            .then((response) => {
                // setIsLoggedIn(true);
                dispatch(changeLoggedIn(true));
                toast.success("Logged successfully");
            })
            .catch((error) => {
                console.log(error);
                setHasErrorLogin(true);
                //setErrorMessageLogin(error);
                setErrorMessageLogin(<span>An error has ocurred in the login</span>);                
                toast.error("An error has ocurred in the login");
            })
    }

    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
            <Layout>
                <Card sx={{
                    minHeight: 400,
                    minWidth: 400,
                }} >
                    <form onSubmit={handleSubmit}>
                        <CardContent sx={{
                            minHeight: 400,
                            minWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "50px"
                        }}>
                            <Box>
                                <FormControl>
                                    <InputLabel>Email Address</InputLabel>
                                    <Input type="email" value={email} onChange={handleChangeEmail} />
                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <InputLabel>Password</InputLabel>
                                    <Input type="password" value={password} onChange={handleChangePassword} />
                                    <FormHelperText>Please type your password.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                marginTop: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex"
                            }}>
                                <Button type="submit" sx={{
                                    padding: '10px 20px'
                                }}>
                                    Log In
                                </Button>
                            </Box>
                            {hasErrorLogin &&
                                <Typography variant="contained" color="red" sx={{
                                    textTransform: "capitalize"
                                }}>
                                    {errorMessageLogin}
                                </Typography>
                            }
                        </CardContent>
                    </form>

                </Card>
            </Layout>
        </>
    )
}

export default Login;