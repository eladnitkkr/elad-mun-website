import React from 'react';
import { Box } from '@chakra-ui/react';
import { Card, Heading, CardHeader, Text, Image, Flex } from '@chakra-ui/react';

export default function ViceChairsCard({ image, name, committee }) {
  return (
    <Card maxW='md' bg='rgba(255, 255, 255, 0.18)' borderRadius='xl'>
      <CardHeader>
        <Flex flex='1' gap='4' alignItems='center'>
          <Image
            src={image}
            alt='MUN Chair image'
            borderRadius='full'
            boxSize='120px'
          />
          <Box>
            <Heading size='md'>{name}</Heading>
            <Text mt={2} fontSize='md'>
              Committee - {committee}{' '}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
    </Card>
  );
}
