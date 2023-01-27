import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function RegisterBtn() {
  return (
    <Link to='/register'>
      <Button colorScheme='blue' variant='solid' size='lg' mt='40px' mb='75px'>
        Register now
      </Button>
    </Link>
  );
}
