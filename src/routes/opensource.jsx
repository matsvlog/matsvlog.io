/** @format */
import React, { useEffect } from 'react';
import '../App.css';

import {
  useMediaQuery,
  Link as CLink,
  FormControl,
  Text,
  Heading,
  Input,
  Image,
  HStack,
  VStack,
  Container,
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

export default function Opensource() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Open Source Projects
            </Heading>
            <Table>
              <Tr>
                <Td fontSize="2xl">Blender</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.blender.org/"
                    isExternal>
                    blender.org
                  </CLink>
                </Td>
              </Tr>
            </Table>
          </center>
        </Box>
      </center>
      <br />
    </Flex>
  );
}
