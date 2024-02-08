import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import ChairsCard from '../ChairsCard';

const chairImg = [
  'images/chair1.jpeg',
  'images/chair2.jpeg',
  'images/chair3.jpeg',
  'images/chair4.jpeg'
];
const chairNames = ['Vihan Saraswat', 'Kartik Deshwal', 'Anjali Kadyan', 'Rishi Singh'];
const chairBio = [
  'Public Speaker | Trainer | Part-time Photographer | Model UN and YP Experience(7+ years) | Attended 200+ Conferences | Excellence in Multimedia | Mastery in Diplomacy | Aspiring Film Maker',
  'Passionate Debater | Public Speaking | Developing Vocal Skills | Judged 35+ Debates | 100+ Conference Participation | Mentorship in Project Vaani (Teach for India) | Awarded for Excellence in Oratory and Social Service',
  "Committed to Women's Empowerment | NGO Contributor | Masters in International Relations (Delhi University) | 100+ Conference Experience | Advocate for Women's Voices and Perspectives in Conferences",
  '170+ Model United Nations (MUNs) and Youth Parliaments | Dedicated to Global Affairs and Diplomacy | Founder and Chairman of Altior Group | Recognized by United Nations, G-20, Niti Ayog | Command over Multiple Languages'
];
const chairCommittee = ['UNGA', 'UNSC', 'UNHRC', 'AIPPM'];


export default function Chairs() {
  return (
    <Box mt='75px' mb='150px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Know the Chairs
        </Heading>
      </Center>

      <SimpleGrid spacing={4} justifyItems='center' minChildWidth='250px'>
        {chairNames.map((name, i) => (
          <ChairsCard
            key={i}
            image={chairImg[i]}
            name={name}
            bio={chairBio[i]}
            committee={chairCommittee[i]}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
