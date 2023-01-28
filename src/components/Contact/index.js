import React from 'react';
import { Box, Center, Heading, Button, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function Contact() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size='2xl' mb='50px'>
          Contact the organizers
        </Heading>
      </Center>

      <Center>
        <Link href='mailto:eladnitkkr16@gmail.com' isExternal>
          <Button leftIcon={<EmailIcon />} variant='solid' size='lg'>
            Email Us
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
