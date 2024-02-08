import React from 'react';
import { Link } from '@chakra-ui/react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import {
  Card,
  Heading,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Button,
  Divider,
  Flex,
} from '@chakra-ui/react';

export default function ChairsCard({ image, name, bio, committee, contact }) {
  return (
    <Card maxW='md' bg='rgba(255, 255, 255, 0.18)' borderRadius='xl'>
      <CardHeader>
        <Flex flex='1' gap='4' alignItems='center'>
          <Image
            src={image}
            alt='MUN Chair image'
            borderRadius='full'
            boxSize='120px'
          />
          <Heading size='md'>{name}</Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='md'>{bio}</Text>
        <Heading color='yellow.400' mt={4} as='h1' fontSize='lg'>
          Committee - {committee}{' '}
        </Heading>
      </CardBody>
      <Divider />
      <CardFooter>
 
      </CardFooter>
    </Card>
  );
}
