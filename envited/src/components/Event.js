import { Box, Text, Heading } from "@chakra-ui/react";
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
    <Box>
      <Heading>{event.name}</Heading>
      <Text>Hosted by {event.hostName}</Text>
      <Text>{event.address}</Text>
      <Text>{event.startDate}</Text>
      <Text>{event.endDate}</Text>
    </Box>
  );
};

export default Event;
