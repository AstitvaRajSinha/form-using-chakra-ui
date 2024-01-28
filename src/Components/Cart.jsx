import React from 'react'
import { AspectRatio, Button, HStack, Heading,Image, Text, VStack, Divider, useColorMode } from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
         
         <VStack w="full" h="full" p="10" spacing="8" bgColor="gray.200" alignItems="space-between">
          <VStack alignItems='flex-start'>
            <Heading size='xl'>Your Cart</Heading>
            <Text fontWeight="light">If the price is too hard on your eyes</Text>
            <Button onClick={toggleColorMode} w="full" variant='outline'>Try changing the theme</Button>
          </VStack>
          <HStack spacing={3} alignItems='center' justifyContent='space-between'> 
            <AspectRatio ratio={1} w={16}>
<Image src="https://png.pngtree.com/png-vector/20200830/ourmid/pngtree-winding-road-on-transparant-design-png-image_2335293.jpg" />
            </AspectRatio>
            <VStack>
              <Heading size='md'>Penny board</Heading>
              <Text color='gray.300'>PNYCOMP27541</Text>
            </VStack>
            <VStack>
              <Heading size='sm'>$119.00</Heading>
            </VStack>
          </HStack>
          <VStack w='full' >
            <HStack w='full' justifyContent='space-between'>
              <Text color='gray.300'>Subtotal</Text>
              <Heading size='sm'>$119.00</Heading>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
              <Text color='gray.300'>Shopping</Text>
              <Heading size='sm'>$19.99</Heading>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
              <Text color='gray.300'>Taxes (estimated) </Text>
              <Heading size='sm'>$23.80</Heading>
            </HStack>
          </VStack>
          <Divider />
          <HStack justifyContent='space-between' w='full'>
            
          <Text color='gray.300'>Shopping</Text>
              <Heading size='lg'>$162.79</Heading>
          </HStack>
        </VStack>

    </>
  )
}

export default Cart