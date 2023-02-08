import { TextField, Typography, Button} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteButton from "./deleteButton";

class Education extends React.Component{
    render(){
        return  <Box align="center" paddingTop="30px; padding-bottom: 30px;">
                          <Typography variant="h6">Education</Typography>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="School"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Degree"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Graduation Date"/>
                          <DeleteButton/>
                        </Box>
    }
}

export default Education;