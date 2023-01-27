import React from 'react';
import { GridItem, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function WhyParticipateGridItem({ data }) {
  return (
    <GridItem w='100%' p={4} bg='rgba(255, 255, 255, 0.18)' borderRadius='lg'>
      <Stack>
        <StarIcon />
        <Text>{data}</Text>
      </Stack>
    </GridItem>
  );
}
