import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  
} from "@mui/material";
import { blue, pink } from "@mui/material/colors";

function App() {
  return (
    <div className="App">
      
      <Typography gutterBottom variant="h3" align="center" marginTop={5}>
        Registeration Form
      </Typography>
      <Card style={{maxWidth:450 , margin:"0 auto", padding:"20px 5px",backgroundColor:""}}>
        <CardContent >
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  placeholder="Enter Your First Name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  type={"email"}
                  placeholder="Enter Your Email"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Phone"
                  type={"number"}
                  placeholder="Enter Your Phone No."
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Content"
                  type={"email"}
                  placeholder="Type something..."
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
