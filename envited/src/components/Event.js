import { Container, Text, Heading, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  console.log(id);

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/events/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvent(data);
      });
  }, [id]);

  if (!event) {
    return <Box>Loading</Box>;
  }

  return (
    <Container sx={{ backgroundColor: "#F6F2FF", height: "100vh" }}>
      <Heading>{event.name}</Heading>
      <Text fontSize="2xl">Hosted by {event.hostName}</Text>
      <Text fontSize="2xl">{event.address}</Text>
      <Text fontSize="2xl">{event.startDate}</Text>
      <Text fontSize="2xl">{event.endDate}</Text>
    </Container>
  );
};

export default Event;
