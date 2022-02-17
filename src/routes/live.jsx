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
  Center,
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

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class TwitchPlayer extends React.Component {
  componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute('src', EMBED_URL);
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
      embed.addEventListener(window.Twitch.Embed.VIDEO_READY, function () {
        console.log('The video is ready');
      });
      embed.addEventListener(window.Twitch.Embed.VIDEO_PLAY, function () {
        console.log('The video is playing');
      });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        {/* TwitchPlayer {this.props.targetID} {this.props.width}{' '}
        {this.props.height} */}
        <div id={this.props.targetID}></div>
      </div>
    );
  }
}

export default function Live() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  TwitchPlayer.defaultProps = {
    targetID: 'twitch-embed',
    width: '1920',
    height: '1080',
    parent: ['matsvlog.com', 'www.matsvlog.com', 'localhost'],
    channel: 'matsvlog',
  };

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <Center>
            <VStack>
              <Heading color={STATIC.HEADING} fontSize="6xl">
                Live Stream
              </Heading>
              <TwitchPlayer />
            </VStack>
          </Center>
        </Box>
      </center>
    </Flex>
  );
}
