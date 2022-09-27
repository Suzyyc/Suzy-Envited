import { Heading, Text, Box, Button, Image } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Heading>
        Imagine if <Box as="span">Snapchat</Box> had events.
      </Heading>
      <Text>
        Easily host and share events with your friends across any social media.
      </Text>
      <Image src="/Landing_page.svg" alt="event example" />
      <Button>🎉Create my event</Button>
    </Box>
  );
};

export default Landing;
