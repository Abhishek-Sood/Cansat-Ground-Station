import Button from "@mui/material/Button"; // Button component from Material UI
import Typography from '@mui/material/Typography';// Textcomponent from Material UI
import { useNavigate } from "react-router-dom";
import '../../../Home.css'



const ViewButton = () => {
    const navigate=useNavigate(); // Initializing navigate function using useNavigate hook
   // Function to navigate to the '/station' route
  const Station=()=>{
    navigate('/station')
  }
    return (
        <div className="ViewButton">
          <Button
            sx={{
              backgroundColor:"black",
              border: "1px solid white",
              "&:hover": {
                backgroundColor: "white",
              },
              minWidth: "230px",
            }}
            onClick={Station}
          >
          <Typography 
            sx={{      
              color: "white",
            }}
          >
            View
          </Typography>
          </Button>
        </div>
      );
}

// Export the ConnectButton component as the default export
export default ViewButton