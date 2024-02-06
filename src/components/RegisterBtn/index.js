import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function RegisterBtn() {
  return (
    <Link
      to='https://docs.google.com/forms/d/e/1FAIpQLSdByh0p9UbGwRCLvS4NMQg4eB6LhcBxUzjAGXkrBlKC0I7IWw/viewform'
      target='_blank'>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme='blue'
        variant='solid'
        size={{ base: 'md', lg: 'lg' }}
        mt='40px'
        mb='75px'>
        Register now
      </Button>
    </Link>
  );
}
