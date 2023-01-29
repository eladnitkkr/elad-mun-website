import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function RegisterBtn({ college }) {
  const registrationLink =
    college === 'nitkkr'
      ? 'https://re6yavl2pjk.typeform.com/to/lO8XblC0'
      : 'https://re6yavl2pjk.typeform.com/to/Pv0rXVIu';
  return (
    <Link to={registrationLink} target='_blank'>
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
