/** @format */
import React, { useEffect } from 'react';
import '../App.css';

import {
  useMediaQuery,
  Link,
  Text,
  Heading,
  Image,
  VStack,
  Button,
  Box,
  Avatar,
  Table,
  Tr,
  Td,
  Badge,
  Menu as CHAKRAMENU,
  MenuButton as CHAKRAMENUButton,
  Flex,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

import * as STATIC from '../model/static';

export default function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.HEADING} fontSize="6xl">
              Welcome to Mat's Vlog
            </Heading>
            <Text color={STATIC.COLOR3}>
              Building the Metaverse, tools and techniques, tips and tricks for
              hackers, makers and fans alike
            </Text>
            <br />
            <Image src="quantum.jpeg" />
          </center>
        </Box>
      </center>
    </Flex>
  );
}
