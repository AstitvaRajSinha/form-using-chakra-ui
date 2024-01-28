import React from 'react'
import {  Button, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, VStack, Checkbox } from '@chakra-ui/react';

const Details = () => {
  return (
    <>
    <VStack w="full" h="full" p="10" spacing="10" alignItems="flex-start">
          <VStack align="flex-start" spacing="2">
            <Heading>Your Details</Heading>
            <Text fontWeight="light">if already have an account, <br /> click here to log in </Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={4}>
            <GridItem  colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter firstname"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input  placeholder="Enter lastname"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input  placeholder="Enter lastname"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City </FormLabel>
                 <Input  placeholder='Enter City Name'/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country </FormLabel>
                <Select placeholder='Select Country'>
                 <option value="India">India</option>
                 <option value="USA">USA</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
               <Checkbox fontWeight='light'>Ship to the billing address</Checkbox>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <Button width="full" bg='brand.100' size='lg'>Place Items</Button>
              </FormControl>
            </GridItem>
            
          </SimpleGrid>


        </VStack>
</>
    
  )
}

export default Details