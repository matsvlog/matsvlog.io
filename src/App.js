/** @format */

import { Global } from '@emotion/react';
import React, { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Input,
  Center,
  Link as CLink,
  Text,
  Divider,
  Container,
  Box,
  Heading,
  VStack,
  Button,
  IconButton,
  HStack,
  Portal,
  MenuList,
  MenuItem,
  Image,
  MenuButton,
  Menu,
  Menu as CHAKRAMENU,
  MenuButton as CHAKRAMENUButton,
  Flex,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import * as STATIC from './model/static';

//==========================================================================================
export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {}, []);
  const navigate = useNavigate();
  return (
    <VStack>
      <Box h="5px" />

      <Heading fontSize="2xl" color={STATIC.TITLE}>
        Mat's Vlog
      </Heading>
      <Heading color={STATIC.HEADING} fontSize="6xl">
        Welcome to Mat's Vlog
      </Heading>
      <Text color={STATIC.COLOR3}>
        Building the Metaverse, tools and techniques, tips and tricks for
        hackers, makers and fans alike
      </Text>
      <Menu>
        <MenuButton color="blue.500">Go to</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem onClick={() => navigate('home')}>Home</MenuItem>
            <MenuItem onClick={() => navigate('live')}>Livestream</MenuItem>
            <MenuItem onClick={() => navigate('videos')}>Videos</MenuItem>
            <MenuItem onClick={() => navigate('tools')}>Tools</MenuItem>
            <MenuItem onClick={() => navigate('metaverse')}>Metaverse</MenuItem>
            <MenuItem onClick={() => navigate('companies')}>Companies</MenuItem>
            <MenuItem onClick={() => navigate('about')}>About</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
      <Divider orientation="horizontal" />
      {/* This is the Ouutlet=============================================================== */}
      <Outlet width="100%" margin="5px" />
      {/* This is the Ouutlet=============================================================== */}
      <Divider orientation="horizontal" />
      <Box height="15px" />

      <CLink href="/subscribe.html">
        <Button>Subscribe to our newsletter</Button>
      </CLink>
      <Box height="15px" />
      <Divider orientation="horizontal" />

      <Text fontSize="xs" color="teal.500">
        Ⓒ Copyright: TECH41 GmbH, Unter den Linden 24, 10117 Berlin, Germany,
        Version: {STATIC.VERSION}
      </Text>

      <CLink fontSize="xs" color="blue.500" href="mailto:mat@matsvlog.com">
        mat@matsvlog.com
      </CLink>
    </VStack>
  );
}
