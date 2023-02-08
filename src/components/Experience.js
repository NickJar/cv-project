import { TextField, Typography, Button} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteButton from "./deleteButton";

class Experience extends React.Component{
    render(){
        return  <Box align="center" paddingTop="30px; padding-bottom: 30px;">
                          <Typography variant="h6">Work Experience</Typography>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Name"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Job Title"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Address"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Phone"/>
                          <DeleteButton/>
                        </Box>
    }
}

export default Experience;