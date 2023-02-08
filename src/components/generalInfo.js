import { TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

class GeneralInfo extends React.Component{
    render(){
        return  <Box align="center" paddingTop="30px;">
                      <Typography variant="h6">General Information</Typography>
                      <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="First Name"/>
                      <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Last Name"/>
                      <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Email"/>
                      <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Phone Number"/>
                </Box>
    }            
}

export default GeneralInfo;