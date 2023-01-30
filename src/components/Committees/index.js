import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleGrid, Center } from '@chakra-ui/react';
import CommitteesCard from '../CommitteesCard';
import RegisterBtn from '../RegisterBtn';

export default function Committees({ college }) {
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
          agenda='Addressing the impact of widespead refugee crisis on social and economic stability'
        />
        <CommitteesCard
          name='UN Security Council (UNSC)'
          image='images/unsa.jpeg'
          description='The Security Council has primary responsibility for the maintenance of international peace and security. It takes the lead in determining the existence of a threat to the peace or act of aggression.'
          agenda='Disputes and controversies in the South China Sea region'
        />
        <CommitteesCard
          name='UN Human Rights Council (UNHRC)'
          image='images/unhrc.jpeg'
          description='UNHRC is a United Nations body whose mission is to promote and protect human rights around the world. It is involved in being more responsive to the needs of victims of rights violations worldwide.'
          agenda='Ensuring public access to information and protection of fundamental freedom in accordance with national legislation and international agreements'
        />
      </SimpleGrid>

      <Center>
        <RegisterBtn college={college} />
      </Center>
    </Box>
  );
}
