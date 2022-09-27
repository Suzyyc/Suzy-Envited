import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Container, Button, Input } from "@chakra-ui/react";

const initialState = {
  name: "",
  hostName: "",
  startDate: new Date(),
  endDate: new Date(),
  address: "",
};

const Create = () => {
  const [fields, setFields] = useState(initialState);
  const navigate = useNavigate();

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
        navigate(`/events/${data._id}`);
      });
  };
  return (
    <Container sx={{ backgroundColor: "#F6F2FF", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <Text fontSize="2xl">My Event Name</Text>
        <Input onChange={handleChange} name="name" placeholder="Event Name" />
        <Text fontSize="2xl">My Name</Text>
        <Input
          onChange={handleChange}
          name="hostName"
          placeholder="Host Name"
        />
        <Text fontSize="2xl">Hosted @ </Text>
        <Input onChange={handleChange} name="address" placeholder="location" />
        <Text fontSize="2xl">It's Starting at </Text>
        <Input onChange={handleChange} name="startDate" type="datetime-local" />
        <Text fontSize="2xl">It's ending at </Text>
        <Input onChange={handleChange} name="endDate" type="datetime-local" />
        {/* Upload Image */}
        <Button sx={{ mt: "1rem" }} type="submit">
          Next
        </Button>
      </form>
    </Container>
  );
};

export default Create;
