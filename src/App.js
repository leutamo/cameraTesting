import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Divider from './components/Divider';

function App() {
  return (
    <>
      <header>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <AppBar>
            <Toolbar>Testing Native camera</Toolbar>
          </AppBar>
          <Box sx={{mt:8}}>
          <div className="normal">
            <p>Normal input type</p>
            <input type="file"></input>
          </div>
          </Box>
          <Divider/>
          <Box>
            <div className="normal">
              <p>Only image</p>
              <input type="file" accept="image/*"></input>
            </div>
          </Box>
          <Divider/> 
          <Box>
            <div className="normal">
              <p>Camera directly</p>
              <input type="file" accept="image/*" capture></input>
              <p>Camera directly v2</p>
              <input type="file" accept="image/*" capture="camera"></input>
            </div>
          </Box>
          <Divider/>      
        </Box>
      </header>
    </>

  );
}

export default App;
