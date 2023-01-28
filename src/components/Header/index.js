import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Image, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Container maxW='container.xl' padding='1rem'>
      <Flex align='center'>
        <Image
          src='images/eladLogo.png'
          alt='ELAD Logo'
          w={{ base: '30px', md: '50px' }}
          mr={2}
        />
        <Text fontSize={{ md: 'xl' }}>
          <Link to='/'>English Literary and Debating Club</Link>
        </Text>
      </Flex>
    </Container>
  );
}
