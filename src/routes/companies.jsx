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

export default function Companies() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Metaverse Companies
            </Heading>
            <Table>
              <Tr>
                <Td fontSize="2xl">Nvidia</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://nvidia.com/"
                    isExternal>
                    nvidia.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Apple</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://apple.com"
                    isExternal>
                    apple.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Adobe</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://adobe.com"
                    isExternal>
                    adobe.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Autodesk</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://autodesk.com"
                    isExternal>
                    autodesk.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Meta</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://meta.com"
                    isExternal>
                    meta.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Unity</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://unity.com/"
                    isExternal>
                    unity.com
                  </CLink>
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="2xl">Unreal Engine</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href="https://www.unrealengine.com/"
                    isExternal>
                    unrealengine.com
                  </CLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontSize="2xl">Oculus</Td>
                <Td>
                  <CLink
                    color="blue.500"
                    fontSize="2xl"
                    href=" https://www.oculus.com/"
                    isExternal>
                    oculus.com
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
