import React from 'react';
import { Card, Heading, CardBody, Text, Image, Stack } from '@chakra-ui/react';

export default function CommitteesCard({ name, description, agenda }) {
  return (
    <Card maxW='md' bg='rgba(255, 255, 255, 0.18)' borderRadius='xl'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Committee image'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
