import React from 'react';
import { Card, Heading, CardBody, Text, Image, Stack } from '@chakra-ui/react';

export default function CommitteesCard({ image, name, description, agenda }) {
  return (
    <Card maxW='md' bg='rgba(255, 255, 255, 0.18)' borderRadius='xl'>
      <CardBody>
        <Image src={image} alt='UN Committee image' borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text fontSize='sm'>{description}</Text>
          <Heading size='sm' mt={4}>
            AGENDA: <br />
            {agenda}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}
