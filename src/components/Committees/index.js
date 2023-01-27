import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CommitteesCard from '../CommitteesCard';
import RegisterBtn from '../RegisterBtn'
import unga from './unga.jpeg';
import unsa from './unsa.jpeg';
import unhrc from './unhrc.jpeg';

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
        <CommitteesCard
          name='UN General Assembly (UNGA)'
          image={unga}
          description='The UNGA is the main policy-making organ of the UN. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations.'
          agenda='Tackling the global refugee crisis'
        />
        <CommitteesCard
          name='UN Security Council (UNSC)'
          image={unsa}
          description='The Security Council has primary responsibility for the maintenance of international peace and security. It takes the lead in determining the existence of a threat to the peace or act of aggression.'
          agenda='The ongoing conflicts in the Middle East'
        />
        <CommitteesCard
          name='UN Human Rights Council (UNHRC)'
          image={unhrc}
          description='UNHRC is a United Nations body whose mission is to promote and protect human rights around the world. It is involved in being more responsive to the needs of victims of rights violations worldwide.'
          agenda='The use of force and counter-terrorism'
        />
      </SimpleGrid>

      <Center>
        <RegisterBtn />
      </Center>
    </Box>
  );
}
