import { Avatar, Container, HStack } from '@chakra-ui/react';
import React from 'react';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <Container w={'100%'} maxW={'100vw'} bg='brand.100'  p={2} px={7} m={0}>
      <HStack justifyContent='space-between' alignItems='center'>
        <IoMenu fontSize={40} />
        <Avatar size='sm' />
      </HStack>
    </Container>
    </>
  )
}

export default Navbar;