import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function BrochureBtn() {
  return (
    <Link
      to='https://drive.google.com/file/d/1-jJYCc0VPCuUlhXcTbmXTOcMjmO2qenm/view?usp=sharing'
      target='_blank'>
      <Button
        colorScheme='blue'
        variant='outline'
        size={{ base: 'md', lg: 'lg' }}
        mt='40px'
        mb='75px'>
        Check the Brochure
      </Button>
    </Link>
  );
}
