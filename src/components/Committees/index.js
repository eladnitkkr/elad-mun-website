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

      <SimpleGrid spacing={4} justifyItems='center' minChildWidth='300px'>
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
          description='The United Nations Security Council (UNSC) is the epicenter of international peace and security. From resolving civil wars to tackling terrorism and cybercrimes, the UNSC stands as the cornerstone of a safer, more prosperous world for all.'
          agenda='Enhancing cross-national security cooperation
          to counter pirate militia attacks in the Red Sea
          and safeguarding global shipping routes with a
          focus on economic stability'
        />
        <CommitteesCard
          name='UN Human Rights Council (UNHRC)'
          image='images/unhrc.jpeg'
          description='The United Nations Human Rights Council (UNHRC) is an inter-governmental body within the United Nations (UN) responsible for promoting and protecting human rights worldwide, with the mandate of addressing human rights violations.'
          agenda='Harmonizing human rights safeguards in the Israel-Palestine conflict: prioritizing the safety of civilians,
          ensuring accountability for violations, facilitating
          adequate humanitarian aid, and cultivating
          international cooperation for a just and peaceful
          resolution'
        />
                <CommitteesCard
          name='All India Political Parties Meet (AIPPM)'
          image='images/AIPPM.jpeg'
          description='The All India Political Parties Meet (AIPPM) serves as a crucial space where politicians come together for open and meaningful discussions, free from formalities of regular legislative duties, bringing in diverse perspectives and collaboration.'
          agenda="Deliberation upon India's strategies to
          preserve and promote cultural heritage with
          special emphasis on rapid modernisation"
        />
      </SimpleGrid>

      <Center>
        <RegisterBtn />
      </Center>
    </Box>
  );
}
