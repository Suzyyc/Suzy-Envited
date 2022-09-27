import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import Landing from "./components/Landing";
import Create from "./components/Create";
import Event from "./components/Event";

function App() {
  return (
    <ChakraProvider>
      <Box centerContent>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/events/:id" element={<Event />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
