import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CommitteesCard from '../CommitteesCard';

export default function Committees() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size='2xl' mb='50px'>
          Committees and Agendas
        </Heading>
      </Center>

      <SimpleGrid
        spacing={4}
        justifyItems='center'
        templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <CommitteesCard name='UN General Assembly (UNGA)' />
        <CommitteesCard name='UN Security Council (UNSC)' />
        <CommitteesCard name='UN Human Rights Council (UNHRC)' />
      </SimpleGrid>
    </Box>
  );
}
