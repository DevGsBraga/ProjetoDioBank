import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { ChakraProvider,
Center,
Box,
Input,
Button,
Icon,
Text,
 } from "@chakra-ui/react";
 import {Usuarios} from './components/Card'





function App() {
  return (
    <ChakraProvider>
      <Header />
      <Usuarios email="usuario@gmail.com.br" senha={25898} />
    </ChakraProvider>
  );
}

export default App;
