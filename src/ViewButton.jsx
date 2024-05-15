import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { startTransition } from 'react';

const ViewButton = () => {
    const navigate = useNavigate();

    // Function to navigate to the '/Station' route
    const Station = () => {
        // Wrap the state update with startTransition
        startTransition(() => {
            navigate('/Station');
        });
    };

    return (
        <div className="ViewButton">
            <Button
                sx={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    "&:hover": {
                        backgroundColor: "#0072aa",
                        border: "1px solid black",
                    },
                    minWidth: "230px",
                    minHeight: '55px'
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
export default ViewButton;
