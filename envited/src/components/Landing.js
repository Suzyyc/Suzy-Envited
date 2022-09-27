import { Heading, Text, Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#F6F2FF",
      }}
    >
      <Heading sx={{ mt: "1rem" }}>
        Imagine if <Box as="span">Snapchat</Box> had events.
      </Heading>
      <Text sx={{ mt: "1rem" }}>
        Easily host and share events with your friends across any social media.
      </Text>
      <Image sx={{ mt: "1rem" }} src="/Landing_page.svg" alt="event example" />
      <Button sx={{ mt: "1rem" }} onClick={handleClick}>
        🎉Create my event
      </Button>
    </Box>
  );
};

export default Landing;
