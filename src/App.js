// import logo from './logo.svg';
import './App.css';
import Details from './Components/Details';
import Cart from './Components/Cart';
import '@chakra-ui/react';
import { AspectRatio, Button, Container, Flex, FormControl, FormLabel, GridItem, HStack, Heading, Input,Image, Select, SimpleGrid, Text, VStack, Checkbox, Divider } from '@chakra-ui/react';
function App() {
  return (
    <Container maxWidth="container.xl" p="10"  >
      <Flex h="100vh" p="20" >
        <Details/>
        <Cart/>
      </Flex>

    </Container>
  );
}

export default App;
