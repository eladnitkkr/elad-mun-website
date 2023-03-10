import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import ChairsCard from '../ChairsCard';

const chairImg = [
  'images/chair1.jpeg',
  'images/chair2.jpeg',
  'images/chair3.jpeg',
];
const chairNames = ['Lakhan Saddi', 'Adarsh Kumar Singh', 'Priyanshu Grover'];
const chairBio = [
  'Business Consultant, ZS Associates | Corporate & Public Speaker | Published Blogger | NIT Alumnus',
  'Founder-COO, Aspirant Learning | Engineer | Awarded National Youth Icon Public Speaking & Soft Skills Coach | III Times International Award Winner',
  "Lawyer | Life-Skills Coach | TEDx Speaker | Founder-CEO, Aspirant Learning | Winner - Harvard A2I'20 and Innovision - IIT Roorkee",
];
const chairCommittee = ['UNGA', 'UNSC', 'UNHRC'];
const chairLinkedin = [
  'https://www.linkedin.com/in/lakhan-saddi-21087b132',
  'https://www.linkedin.com/in/adarshsinghkumar',
  'https://www.linkedin.com/in/priyanshugrover',
];

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
            contact={chairLinkedin[i]}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
