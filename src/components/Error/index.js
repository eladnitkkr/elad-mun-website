import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';

export default function Error() {
  return (
    <Flex alignItems='center' flexDirection='column' m='15%'>
      <Heading>404</Heading>
      <Text textAlign='center'>
        Oops, the page you're trying to reach doesn't exist :(
      </Text>
    </Flex>
  );
}
