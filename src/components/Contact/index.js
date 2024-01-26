import React from 'react';
import {
  Box,
  Center,
  Heading,
  Button,
  Link,
  Stack,
  ButtonGroup,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export default function Contact() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Contact the coordinators
        </Heading>
      </Center>

      <Stack spacing={4}>
        <Center>Email us at:</Center>
        <Center>
          <Link href='mailto:elad@nitkkr.ac.in' isExternal mb={4}>
            <Button
              leftIcon={<EmailIcon />}
              variant='solid'
              size={{ base: 'md', lg: 'lg' }}>
              elad@nitkkr.ac.in
            </Button>
          </Link>
        </Center>

        <Center>Call us on:</Center>
        <Center>
          <ButtonGroup spacing='4'>
            <Link href='tel:9810263070' isExternal>
              <Button
                leftIcon={<PhoneIcon />}
                color='yellow.400'
                variant='outline'
                size={{ base: 'sm', md: 'md' }}>
                Avtans Dixit
              </Button>
            </Link>

            <Link href='tel:8657424630' isExternal>
              <Button
                leftIcon={<PhoneIcon />}
                color='yellow.400'
                variant='outline'
                size={{ base: 'sm', md: 'md' }}>
                Swasti Verma
              </Button>
            </Link>

          </ButtonGroup>
        </Center>
      </Stack>
    </Box>
  );
}
