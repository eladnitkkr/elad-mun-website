import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CommitteesCard from '../CommitteesCard';
import RegisterBtn from '../RegisterBtn';

export default function Committees() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Committees and Agendas
        </Heading>
      </Center>

      <SimpleGrid spacing={4} justifyItems='center' minChildWidth='250px'>
        <CommitteesCard
          name='UN General Assembly (UNGA)'
          image='images/unga.jpeg'
          description='The UNGA is the main policy-making organ of the UN. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations.'
          agenda='Navigating the geopolitical gastronomy: With
          special emphasis on diplimatic formulas to mitigate
          the confluence of climate crisis, conflict
          dynamics, and economic uncertainties in the global
          food nexus'
        />
        <CommitteesCard
          name='UN Security Council (UNSC)'
          image='images/unsa.jpeg'
          description='The Security Council has primary responsibility for the maintenance of international peace and security. It takes the lead in determining the existence of a threat to the peace or act of aggression.'
          agenda='Enhancing cross-national security cooperation
          to counter pirate militia attacks in the red sea
          and safeguarding global shipping routes with a
          focus on economic stability \n \n'
        />
        <CommitteesCard
          name='UN Human Rights Council (UNHRC)'
          image='images/unhrc.jpeg'
          description='UNHRC is a United Nations body whose mission is to promote and protect human rights around the world. It is involved in being more responsive to the needs of victims of rights violations worldwide.'
          agenda='Harmonizing human rights safeguards in the Israel Palestine conflict: prioritizing the safety of civilians,
          ensuring accountability for violations, facilitating
          adequate humanitarian aid, and cultivating
          international cooperation for a just and peaceful
          resolution'
        />
                <CommitteesCard
          name='UN General Assembly (UNGA)'
          image='images/unga.jpeg'
          description='The UNGA is the main policy-making organ of the UN. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations.'
          agenda='Navigating the geopolitical gastronomy: With
          special emphasis on diplimatic formulas to mitigate
          the confluence of climate crisis, conflict
          dynamics, and economic uncertainties in the global
          food nexus'
        />
      </SimpleGrid>

      <Center>
        <RegisterBtn />
      </Center>
    </Box>
  );
}
