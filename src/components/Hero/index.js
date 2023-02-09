import React from 'react';
import { Heading, Text, Flex, Image, ButtonGroup, Box } from '@chakra-ui/react';
import RegisterBtn from '../RegisterBtn';
import BrochureBtn from '../BrochureBtn';

export default function Hero() {
  return (
    <Box mt={4}>
      <Flex align='center'>
        <Image
          src='images/munlogo.png'
          alt='MUN Logo'
          w={{
            base: '80px',
            sm: '100px',
            md: '120px',
            lg: '200px',
            xl: '250px',
          }}
          mr={4}
        />
        <Heading
          as='h1'
          fontSize={{
            base: '30px',
            sm: '40px',
            md: '50px',
            lg: '80px',
            xl: '100px',
          }}>
          Model <br />
          United Nations.
        </Heading>
      </Flex>
      <Text
        fontSize={{
          base: 'md',
          md: 'lg',
          lg: 'xl',
        }}
        mt={4}>
        <i>Let thy speech be better than silence, or be silent.</i><br/ ><br />English Literary
        and Debating Club is setting the stage for future leaders. Model
        United Nations (MUN) will be organized by ELAD on the <b>11th and 12th of February
        2023</b> at NIT Kurukshetra. Stay tuned, keep ameliorating your diplomacy
        and get ready to witness the exhibition of enchanting statesmanship.
      </Text>
      <ButtonGroup>
        <BrochureBtn />
        <RegisterBtn />
      </ButtonGroup>
    </Box>
  );
}
