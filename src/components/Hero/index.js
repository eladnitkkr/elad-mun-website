import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react';
import munLogo from './munlogo.png';

export default function Hero({ history, user }) {
  return (
    <>
      <Container
        // h='calc(100vh - 72px)'
        d='flex'
        justifyContent='center'
        alignContent='left'
        flexDir='column'
        maxW={{
          base: 'container.sm',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}>
        <Text fontSize='2xl' mt='50px'>
          <b>ELAD</b> presents
        </Text>
        <Flex align='center' mt={4}>
          <Image src={munLogo} alt='ELAD Logo' w='250px' mr={4} />
          <Heading as='h1' fontSize='90px'>
            Model <br />
            United Nations.
          </Heading>
        </Flex>
        <Text fontSize='lg' mt={4}>
          Current speakers are going to be future world leaders, and English
          Literary and Debating Club is setting the stage for these leaders.
          Model United Nations (MUN) will be organized by ELAD on 10th and 11th
          February, 2023 at NIT Kurukshetra. Stay tuned, keep ameliorating your
          diplomacy and be ready to witness the exhibition of enchanting
          statesmanship 🧑🏻‍⚖️.
        </Text>
        <Link to='/register'>
          <Button colorScheme='blue' variant='solid' size='lg' mt='40px'>
            Register now
          </Button>
        </Link>
      </Container>
    </>
  );
}
