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

export default function Startups() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Metaverse Startups
            </Heading>

            <Table>
              <Tr>
                <Td fontSize="2xl">Ready Player Me</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://readyplayer.me/"
                    isExternal>
                    readyplayer.me
                  </CLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontSize="2xl">Animaze</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.animaze.us/"
                    isExternal>
                    animaze.us
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Youfoundme</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://youfoundme.io"
                    isExternal>
                    youfoundme.io
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
