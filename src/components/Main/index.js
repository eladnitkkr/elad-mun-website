import React from 'react';
import { Container } from '@chakra-ui/react';
import Hero from '../Hero';
import Committees from '../Committees';
import WhyParticipate from '../WhyParticipate';
import Chairs from '../Chairs';
import Contact from '../Contact';

export default function Main({ college }) {
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
        <Hero college={college} />
        <WhyParticipate college={college} />
        <Committees college={college} />
        <Chairs college={college} />
        <Contact />
      </Container>
    </>
  );
}
