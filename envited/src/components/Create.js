import { useState } from "react";
import { Heading, Text, Box, Button, Image, Input } from "@chakra-ui/react";

const initialState = {
  name: "",
  hostName: "",
  startDate: new Date(),
  endDate: new Date(),
  address: "",
};

const Create = () => {
  const [fields, setFields] = useState(initialState);

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    let updatedFields = { ...fields };
    updatedFields[name] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  return (
    <Box>
      {/* Event Name
      Host name
      Start and End time/date
      Location
      Event Photo */}
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} name="name" placeholder="Event Name" />

        <Button type="submit">Next</Button>
      </form>
    </Box>
  );
};

export default Create;
