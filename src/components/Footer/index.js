import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  Image,
  Text,
  Divider,
  HStack,
  Icon,
  Container,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container maxW='container.xl' padding='1rem'>
      <Stack spacing={4} align='stretch'>
        <Box>
          <Image src='images/eladLogo.png' alt='ELAD Logo' w='35px' />
          <Text fontWeight='bold' mt={2}>
            English Literary and Debating Club, NIT Kurukshetra
          </Text>
        </Box>
        <Box w='70%'>
          <Text>
            The English Literary and Debating Club (ELAD) is an official club of
            NIT Kurukshetra responsible for organizing literary, oratory, and
            quizzing events.
          </Text>
        </Box>
        <Divider />
        <Box p='20px 0'>
          <HStack justify='end' fontSize='sm'>
            <HStack spacing={3}>
              <Text>Follow us on:</Text>
              <Link to='https://www.instagram.com/eladnitkkr'>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link to='https://www.facebook.com/eladnitkkr'>
                <Icon as={FaFacebookF} boxSize={6} />
              </Link>
            </HStack>
          </HStack>
        </Box>
      </Stack>
    </Container>
  );
}
