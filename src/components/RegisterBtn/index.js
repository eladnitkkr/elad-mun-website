import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function RegisterBtn() {
  return (
    <Link to='https://re6yavl2pjk.typeform.com/to/Pv0rXVIu' target='_blank'>
      <Button
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
