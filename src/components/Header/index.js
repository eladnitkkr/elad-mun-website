import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Image, Text } from '@chakra-ui/react';
import eladLogo from './eladLogo.png';

export default function Header() {
  return (
    <Container maxW='container.xl' padding='1rem'>
      <Flex align='center'>
        <Image src={eladLogo} alt='ELAD Logo' w='50px' mr={2} />
        <Text fontSize='xl'>
          <Link to='/'>English Literary and Debating Club</Link>
        </Text>
      </Flex>
    </Container>
  );
}
