import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import RegisterBtn from '../RegisterBtn';
import ChairsCard from '../ChairsCard';
import chair1 from './chair1.jpeg';
import chair2 from './chair2.jpeg';
import chair3 from './chair3.jpeg'

const chairImg = [chair1, chair2, chair3];
const chairNames = ['Adarsh Kumar Singh', 'Priyanshu Grover', 'Lakhan Saddi'];
const chairBio = [
  'Founder-COO, Aspirant Learning | Engineer | Awarded National Youth Icon Public Speaking & Soft Skills Coach | III Times International Award Winner',
  "Lawyer | Life-Skills Coach | TEDx Speaker | Founder-CEO, Aspirant Learning | Winner - Harvard A2I'20 and Innovision - IIT Roorkee", 'Business Consultant, ZS Associates | Corporate & Public Speaker | Published Blogger | NIT Alumnus'
];
const chairLinkedin = [
  'https://www.linkedin.com/in/adarshsinghkumar',
  'https://www.linkedin.com/in/priyanshugrover',
  'https://www.linkedin.com/in/lakhan-saddi-21087b132'
];

export default function Chairs() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size='2xl' mb='50px'>
          Know the Chairs
        </Heading>
      </Center>

      {/* <Center>
        <Text fontSize='2xl'>Announcing soon!</Text>
      </Center> */}

      <SimpleGrid
        spacing={4}
        justifyItems='center'
        templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {chairNames.map((name, i) => (
          <ChairsCard
            key={i}
            image={chairImg[i]}
            name={name}
            bio={chairBio[i]}
            contact={chairLinkedin[i]}
          />
        ))}
      </SimpleGrid>

      <Center>
        <RegisterBtn />
      </Center>
    </Box>
  );
}
