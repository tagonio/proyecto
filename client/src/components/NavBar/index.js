import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from "./index.module.css";
import { useContext } from 'react';
import { AuthorizationContext } from '../../context/authorization';
import { saveToken } from '../../services/authorization';
import { ThemeContext } from '../../context/theme';
import { AppContext } from '../../context/store';
import { changeDarkMode, changeLoggedIn } from '../../redux/actions/globalActions';

function NavBar() {

    // const { isLoggedIn, setIsLoggedIn } = useContext(AuthorizationContext);
    
    const { darkTheme, isLoggedIn , dispatch } = useContext(AppContext);

    const handleLogout = () => {
        // setIsLoggedIn(false);
        dispatch(changeLoggedIn(false));
        saveToken("");
    }

    const handleChangeTheme = () =>{
        // setDarkTheme(!darkTheme);
        dispatch(changeDarkMode(!darkTheme));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className={styles['nav-link']} to="/">
                            My App
                        </Link>
                    </Typography>
                    <Button sx={{
                        color: 'white'
                    }} onClick={handleChangeTheme}>
                        {
                            darkTheme &&
                            <LightModeIcon></LightModeIcon>
                        }
                        {
                            !darkTheme &&
                            <DarkModeIcon></DarkModeIcon>
                        }
                    </Button>

                    {

                        !isLoggedIn && <>
                            <Link className={styles['nav-link']} to="/login">
                                <Button color="inherit">
                                    Login
                                </Button>
                            </Link>
                            <Link className={styles['nav-link']} to="/register">
                                <Button color="inherit">
                                    Register
                                </Button>
                            </Link>
                        </>
                    }

                    {
                        isLoggedIn && <>
                            <Link className={styles['nav-link']} to="/dashboard">
                                <Button color="inherit">
                                    Dashboard
                                </Button>
                            </Link>
                            <Button onClick={handleLogout} color="inherit">
                                Logout
                            </Button>
                        </>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;