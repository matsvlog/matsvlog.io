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

export default function Metaverse() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Metaverse
            </Heading>

            <Table>
              <Tr>
                <Td fontSize="2xl">Second Life</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://secondlife.com"
                    isExternal>
                    secondlife.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Decentraland</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://decentraland.org/"
                    isExternal>
                    decentraland.org
                  </CLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontSize="2xl">Sandbox</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://sandbox.game"
                    isExternal>
                    sandbox.game
                  </CLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontSize="2xl">Sonium Space</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://somniumspace.com/"
                    isExternal>
                    somniumspace.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Minecraft</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href=" https://www.minecraft.net/"
                    isExternal>
                    minecraft.net
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Party Space</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.party.space/"
                    isExternal>
                    party.space
                  </CLink>
                </Td>
              </Tr>
            </Table>
            <br />
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Gaming Metaverse
            </Heading>

            <Table>
              <Tr>
                <Td fontSize="2xl">Roblox</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.roblox.com"
                    isExternal>
                    roblox.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Fortnite</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.epicgames.com/fortnite"
                    isExternal>
                    epicgames.com/fortnite
                  </CLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontSize="2xl">Axie Infinity</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://axieinfinity.com/"
                    isExternal>
                    axieinfinity.com
                  </CLink>
                </Td>
              </Tr>
            </Table>
            <br />
            <Text>
              For a complete listing see Ryan Schultz: <br />
              <CLink
                color="blue.500"
                href=" https://ryanschultz.com/list-of-social-vr-virtual-worlds/"
                isExternal>
                {' '}
                ryanschultz.com/list-of-social-vr-virtual-worlds/
              </CLink>
            </Text>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
