import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";

const Header = ({title, subtitle})=>{
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
            variant="h2"
            color = {color.grey[100]}
            fontWeight="bold"
            sx={{mb:"5px"}}
            > 
            {title}

            </Typography>
            <Typography variant="h5" color={color.greenAccent[4]}>{subtitle}</Typography>
        </Box>
    );
};

export default Header;