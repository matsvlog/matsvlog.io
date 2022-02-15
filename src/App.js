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
  Box,
  Heading,
  VStack,
  Button,
  IconButton,
  HStack,
  Image,
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

  return (
    <VStack>
      <Box h="5px" />
      <Heading fontSize="2xl" color={STATIC.TITLE}>
        Mat's Vlog
      </Heading>
      <Outlet width="100%" margin="5px" />
      <Box>
        <CLink color="blue.500" href="mailto:mat@matsvlog.com">
          contact: mat@matsvlog.com
        </CLink>
      </Box>
    </VStack>
  );
}
