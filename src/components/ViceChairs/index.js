import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import ViceChairsCard from '../ViceChairsCard';

const viceChairImg = ['images/vc1.jpeg', 'images/vc2.jpeg', 'images/vc3.jpeg', 'images/vc4.jpeg'];
const viceChairNames = ['Wania Hussain', 'Mansvi Bangarh', 'Radhika Bharadwaj', 'Aditya Dubey'];
const viceChairCommittee = ['UNGA', 'UNSC', 'UNHRC', 'AIPPM'];

export default function ViceChairs() {
  return (
    <Box mt='75px' mb='150px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Know the Vice Chairs
        </Heading>
      </Center>

      <SimpleGrid spacing={4} justifyItems='center' minChildWidth='250px'>
        {viceChairNames.map((name, i) => (
          <ViceChairsCard
            key={i}
            image={viceChairImg[i]}
            name={name}
            committee={viceChairCommittee[i]}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
