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

export default function About() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              About
            </Heading>
            <VStack>
              <Avatar src="mat.png" width="120px" height="120px"></Avatar>
              <Container>
                <Text>
                  Hi, i am Mat,
                  <br />
                  <p>
                    {' '}
                    Nice to meet you. Please feel free to contact me any time
                    at:{' '}
                    <CLink
                      color="blue.500"
                      href="mailto:mat@matsvlog.com"
                      isExternal>
                      mat@matsvlog.com
                    </CLink>
                  </p>
                  <br />
                  <p>
                    This blog will showcase tools and tips and tricks for
                    Metaverse fans, hackers and creators alike.
                  </p>
                  <br />
                  <p>
                    From the inception of the name Metaverse (Snow Crash by Neal
                    Stephenson, 1992) to today a myriad of technologies have
                    been created, which now come together to make the Metaverse
                    a reality. From the beginnings of the the Internet (ARPA
                    1960) area, home computer or PC (1981), the Web (1989),
                    mobile and smartphone to virtualisation and cloud computing
                    driven by opensource innovations to 3D vizor hardware like
                    the{' '}
                    <CLink HREF="https://www.oculus.com/rift/" IsExternal>
                      Oculus Rift,
                    </CLink>{' '}
                    that allows us to emerge in virtual 3D worlds we have come a
                    long way.
                  </p>
                  <br />
                  <p>
                    Crypto technolgies and blockchains based on decentralized
                    Consensus Algorithms allow new business models and new
                    organisational forms like DAOs to emerge.
                  </p>
                  <br />
                  <p>
                    Digital nomads are working remotely from any where in the
                    world without any geopolitical borders or social constraints
                    bringing us closer together and foster Financial Inclusion.
                  </p>
                  <br />
                  <p>
                    The Metaverse will be an extension of WEB3, bridging
                    physical distances, bringing us near a vision called
                    'beaming or teleporting' as suggested by Start Trek 1986.
                  </p>
                  <br />
                  <p>
                    Here at Mat's Vlog we will produce videos showcasing the
                    state of the art and hopefully help content creators and
                    developers to find the relevant tools and information to
                    succeed in building the Metaverse.
                  </p>
                  <br />
                  <p>
                    Tags: Audio: Sound, Foley, Music, Ambience, TTS, Speech
                    Recognition, Visual: Images, Videos, Shaders, 3D Animation,
                    Avatars, Chat, Networking, Crypto, NFT, Assets, Game
                    Engines, Motion Capture, Storyboards, Studio Gear, Mic,
                    Camera, Lights, Composing, Editing, Color Grading, Chat
                    Bots, Pathfinding, Programming, Midi, OSC, DMX, Scripting,
                    Decentralized Identity, DID, ML and AI.
                  </p>
                  <br />
                  <p>
                    Thank you and hope to meet you soon, on-line and in the
                    Metaverse, Mat
                  </p>
                </Text>
              </Container>
            </VStack>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
