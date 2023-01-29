import React from 'react';
import { Box, Center, Heading, Button, Link } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function Contact() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Contact the organisers
        </Heading>
      </Center>

      <Center>
        <Link href='mailto:eladnitkkr16@gmail.com' isExternal>
          <Button
            leftIcon={<EmailIcon />}
            variant='solid'
            size={{ base: 'md', lg: 'lg' }}>
            Email Us
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
