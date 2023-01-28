import React from 'react';
import { Container } from '@chakra-ui/react';
import Hero from '../Hero';
import Committees from '../Committees';
import WhyParticipate from '../WhyParticipate';
import Chairs from '../Chairs';
import Contact from '../Contact';

export default function Main() {
  return (
    <>
      <Container
        d='flex'
        justifyContent='center'
        alignContent='left'
        flexDir='column'
        maxW={{
          base: 'container.sm',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}>
        <Hero />
        <WhyParticipate />
        <Committees />
        <Chairs />
        <Contact />
      </Container>
    </>
  );
}
