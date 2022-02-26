/** @format */
import React, { useEffect, useState } from 'react';
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

import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';

import * as STATIC from '../model/static';

export default function Books() {
  const [books, setBooks] = useState([]);

  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });
  const navigate = useNavigate();

  useEffect(() => {
    const books = [
      {
        title: 'Snowcrash',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: '3D User Interfaces',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Metaverse Investing',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Mastering Ethereum',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'The spatical Web',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'The augmented workforce',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Unity',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Blender',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Renderbook',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'NFT',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Digital Identity',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Ready Player One',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Cloud Computing',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Audio and Fx',
        author: 'auth',
        img: 'https://some.png',
        alt: 'some',
        desc: 'some description',
      },
      {
        title: 'Digital Lighting and Rendering',
        author: 'Jeremy Birn',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51b93Sh3sPL._SX408_BO1,204,203,200_.jpg',
        alt: 'Digital Lighting and Rendering',
        url: 'https://www.amazon.com/Digital-Lighting-Rendering-Voices-Matter-ebook-dp-B00GFSAOMU/dp/B00GFSAOMU',
        desc: 'some description',
      },
    ];
    setBooks(books);
  }, []);

  const linkSelected = (url) => {
    navigate(url);
  };

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading color={STATIC.SUBHEADING} fontSize="4xl">
              Books
            </Heading>
            <Table>
              {Object.keys(books).map((k, i) => {
                let b = books[k];
                return (
                  <Tr key={i}>
                    <Td>
                      <CLink onClick={() => linkSelected(b.url)}>
                        <Image
                          with="80p"
                          height="120"
                          objectFit="cover"
                          src={b.img}
                          alt={b.alt}
                        />
                      </CLink>
                    </Td>
                    <Td>
                      <CLink onClick={() => linkSelected(b.url)}>
                        <Text fontSize="3xl">{b.title}</Text>
                        <br />
                        <Text fontSize="1xl">{b.author}</Text>
                        <br />
                        <Text fontSize="1xl">{b.desc}</Text>
                      </CLink>
                    </Td>
                  </Tr>
                );
              })}
            </Table>
          </center>
        </Box>
      </center>
      <br />
    </Flex>
  );
}
