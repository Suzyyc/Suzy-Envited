import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

import Landing from "./components/Landing";
import Create from "./components/Create";

function App() {
  return (
    <ChakraProvider>
      <Container centerContent>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
