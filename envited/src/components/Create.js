import { useState } from "react";
import { Text, Box, Button, Input } from "@chakra-ui/react";

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
    fetch(`${process.env.REACT_APP_API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Text>My Event Name</Text>
        <Input onChange={handleChange} name="name" placeholder="Event Name" />
        <Text>My Name</Text>
        <Input
          onChange={handleChange}
          name="hostName"
          placeholder="Host Name"
        />
        <Text>Hosted @ </Text>
        <Input onChange={handleChange} name="address" placeholder="location" />
        <Text>It's Starting at </Text>
        <Input onChange={handleChange} name="startDate" type="datetime-local" />
        <Text>It's ending at </Text>
        <Input onChange={handleChange} name="endDate" type="datetime-local" />
        {/* Upload Image */}
        <Button type="submit">Next</Button>
      </form>
    </Box>
  );
};

export default Create;
