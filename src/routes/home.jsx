/** @format */
import React, { useEffect } from 'react';
import '../App.css';

import {
  useMediaQuery,
  Link,
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

export default function Home() {
  const [thankyou, setThankyou] = React.useState('');

  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  const subscribe = () => {
    setThankyou('Thank you!');
  };

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

        <Container>
          <div id="mc_embed_signup">
            <FormControl
              action="https://matsvlog.us14.list-manage.com/subscribe/post?u=1c1bd018a989925bef6f61e2b&amp;id=28f8d54e1c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate>
              <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">Subscribe to our newsletter</label>
                <HStack>
                  <Input
                    type="email"
                    name="EMAIL"
                    class="email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <Button onClick={subscribe} type="submit">
                    send
                  </Button>
                  <div aria-hidden="true">
                    <Input
                      type="hidden"
                      name="b_1c1bd018a989925bef6f61e2b_28f8d54e1c"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </HStack>
                <Text color="green.500">{thankyou}</Text>
              </div>
            </FormControl>
          </div>
        </Container>
      </center>
    </Flex>
  );
}
