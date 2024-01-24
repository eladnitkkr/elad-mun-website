import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function RegisterBtn() {
  return (
    <Link
      to='https://unstop.com/p/model-united-nations-national-institute-of-technology-nit-kurukshetra-599126'
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
