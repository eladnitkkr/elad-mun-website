import React from 'react';
import { Box, Heading, Center, Grid } from '@chakra-ui/react';
import WhyParticipateGridItem from '../WhyParticipateGridItem';
import RegisterBtn from '../RegisterBtn';

const reasons = [
  'Promotes logical and rational thinking among students.',
  'Enhances the general awareness of the students.',
  'Exposes to a major multidisciplinary debating event in the academic term.',
  'Mitigates shyness and timidness in the freshman and sophomore year.',
  'Provides students a platform to improve their public and interpersonal skills.',
];

export default function WhyParticipate() {
  return (
    <Box mt='75px' mb='75px'>
      <Center>
        <Heading as='h1' size={{ base: 'lg', md: 'xl', lg: '2xl' }} mb='50px'>
          Why participate?
        </Heading>
      </Center>

      <Grid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' gap={4}>
        {reasons.map((reason, i) => (
          <WhyParticipateGridItem key={i} data={reason} />
        ))}
      </Grid>

      <Center>
        <RegisterBtn />
      </Center>
    </Box>
  );
}
