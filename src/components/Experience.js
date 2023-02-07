import { TextField, Typography, Grid, Button} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

class Experience extends React.Component{
    render(){
        return <Grid container align="center" spacing={1}>
                  <Grid align="center" xs={3}></Grid>
                   <Grid align="center" xs={6}>
                    <Box align="center" paddingTop="30px; padding-bottom: 30px;">
                          <Typography variant="h6">Work Experience</Typography>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Name"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Job Title"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Address"/>
                          <TextField margin="dense" fullWidth align="center" id="" type="text" placeholder="Company Phone"/>
                          <Button fullWidth variant="contained">Add</Button>
                        </Box>
                    </Grid>
                    <Grid align="center" xs={3}></Grid>
               </Grid>
    }
}

export default Experience;