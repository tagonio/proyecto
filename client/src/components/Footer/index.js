import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './index.css';


function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                minHeight: "5vh",
                textAlign: "center"
            }}>
                <h4>Hecho por Jhoan</h4>
            </AppBar>
        </Box>
    );
}

export default Footer;