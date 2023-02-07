import React from "react";
import { AppBar, Typography } from "@mui/material";

class Header extends React.Component{
    render(){
        return <AppBar position="relative">
                    <Typography paddingTop="20px;" paddingBottom="20px;" variant="h3" align="center" bgcolor="tan">CV Creator</Typography>
               </AppBar> 
    }
}

export default Header;