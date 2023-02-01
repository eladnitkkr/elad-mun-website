import React from 'react';
import { Heading, Text, Flex, Image, ButtonGroup } from '@chakra-ui/react';
import RegisterBtn from '../RegisterBtn';
import BrochureBtn from '../BrochureBtn';

export default function Hero() {
  return (
    <>
      <Text
        fontSize={{
          base: 'md',
          md: 'lg',
          lg: 'xl',
        }}
        mt='50px'>
        <b>ELAD</b> presents
      </Text>
      <Flex align='center' mt={4}>
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
        Current speakers are going to be future world leaders, and English
        Literary and Debating Club is setting the stage for these leaders. Model
        United Nations (MUN) will be organized by ELAD on 11th and 12th
        February, 2023 at NIT Kurukshetra. Stay tuned, keep ameliorating your
        diplomacy and be ready to witness the exhibition of enchanting
        statesmanship.
      </Text>
      <ButtonGroup spacing='4'>
        <BrochureBtn />
        <RegisterBtn />
      </ButtonGroup>
    </>
  );
}
