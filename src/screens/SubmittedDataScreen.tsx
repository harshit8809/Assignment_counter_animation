import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Box, Container, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring components

const SubmittedDataScreen: React.FC = () => {
  const location = useLocation();
  const userData = location.state as {
    name: string;
    address: string;
    email: string;
    phone: string;
    userId: string;
  };
  console.log("userData ->", userData);

  // Define animations using react-spring
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 800 },
  });

  const scaleUp = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { duration: 700 },
  });

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {/* Animate the title */}
        <animated.div style={fadeIn}>
          <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: "bold" }}>
            User Data
          </Typography>
        </animated.div>

        {/* Animate each data field */}
        <Box
          border={1}
          borderColor="grey.300"
          borderRadius={4}
          boxShadow={3}
          p={4}
          width="100%"
          maxWidth={500}
          bgcolor="background.paper"
        >
          <animated.div style={slideIn}>
            <Typography variant="h5" gutterBottom>
              <strong>Name:</strong> {userData.name}
            </Typography>
          </animated.div>
          <animated.div style={slideIn}>
            <Typography variant="h5" gutterBottom>
              <strong>Address:</strong> {userData.address}
            </Typography>
          </animated.div>
          <animated.div style={slideIn}>
            <Typography variant="h5" gutterBottom>
              <strong>Email:</strong> {userData.email}
            </Typography>
          </animated.div>
          <animated.div style={slideIn}>
            <Typography variant="h5" gutterBottom>
              <strong>Phone:</strong> {userData.phone}
            </Typography>
          </animated.div>
          <animated.div style={scaleUp}>
            <Typography variant="h5" gutterBottom>
              <strong>User ID:</strong> {userData.userId}
            </Typography>
          </animated.div>
        </Box>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "100%", maxWidth: 200, marginTop: 40 }}
          >
            Back
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default SubmittedDataScreen;