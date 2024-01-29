// import logo from './logo.svg';
import './App.css';
import Details from './Components/Details';
import Cart from './Components/Cart';
import '@chakra-ui/react';
import { AspectRatio, Button, Container, Flex, FormControl, FormLabel, GridItem, HStack, Heading, Input,Image, Select, SimpleGrid, Text, VStack, Checkbox, Divider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
   
    <Container maxWidth="container.xl" p="10"  >
      <Flex h={{
        base:"auto", md:"100vh"
      }} py={[0,10,10]} flexWrap={{
        base: "wrap-reverse",
        md :"nowrap"
      }} >
        <Details/>
        <Cart/>
      </Flex>

    </Container>
     </>
  );
}

export default App;
