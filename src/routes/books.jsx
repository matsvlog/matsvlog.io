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
        title: '3D User Interfaces',
        author:
          ' Jr. LaViola, Joseph J., Ernst Kruijff, Ryan P. McMahan, Doug Bowman, Ivan P. Poupyrev',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0134034325&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: '3D User Interfaces',
        desc: 'The Complete, Up-To-Date Guide to Building Great 3D User Interfaces for Any Application',
        url: 'https://www.amazon.com/gp/product/0134034325/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0134034325&linkCode=as2&tag=matsvlog-20&linkId=8f6bb93575bbbd6d8e651266200258f5',
      },
      {
        title: 'Snowcrash',
        author: 'Neal Stephenson',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FBJCJE&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Snowcrash',
        desc: 'In this mind-altering romp—where the term “Metaverse” was first coined—you’ll experience a future America so bizarre, so outrageous, you’ll recognize it immediately',
        url: 'https://www.amazon.com/gp/product/B000FBJCJE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FBJCJE&linkCode=as2&tag=matsvlog-20&linkId=cc2c39d5c0988b838a723f6c6409bd5f',
      },
      {
        title: 'The Augmented workforce',
        author: 'Cathy Hackl, John Buzzell',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B094LL26BD&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'The Augmented workforce',
        desc: 'How Artificial Intelligence, Augmented Reality, and 5G Will Impact Every Dollar You Make',
        url: 'https://www.amazon.com/gp/product/B094LL26BD/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B094LL26BD&linkCode=as2&tag=matsvlog-20&linkId=ac440653d91c970c601525a7fab56114',
      },
      {
        title: 'Metaverse Investing',
        author: 'The Meta-Verse',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B09SBQWFC4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Metaverse Investing',
        desc: 'Beginners to Advance Invest in the Metaverse; Cryptocurrency, NFT (non-fungible tokens) Bitcoin, Virtual Land, Stocks, Trading, ETF, ... Web3 & Blockchain Technology: 2022 & Beyond',
        url: 'https://www.amazon.com/gp/product/B09SBQWFC4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B09SBQWFC4&linkCode=as2&tag=matsvlog-20&linkId=f15874176d2dceafcde8d4a04a42f47a',
      },
      {
        title: 'Mastering Bitcoin',
        author: 'Andreas M. Antonopoulos',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1491954388&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Mastering Bitcoin',
        desc: 'Programming the Open Blockchain 2nd Edition',
        url: 'https://www.amazon.com/gp/product/1491954388/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1491954388&linkCode=as2&tag=matsvlog-20&linkId=d51343cc55bd8b631ac8262b951421fa',
      },
      {
        title: 'The Spatical Web',
        author: 'Gabriel René, Dan Mapes, Jay Samit',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0578562960&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'The Spatical Web',
        desc: 'How web 3.0 will connect humans, machines and AI to transform the world',
        url: 'https://www.amazon.com/gp/product/0578562960/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0578562960&linkCode=as2&tag=matsvlog-20&linkId=f27195d77749831b0606675074990af8',
      },
      {
        title: 'Hands-On Unity 2021 Game Development',
        author: 'Nicolas Alejandro Borromeo ',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B095J4NXTT&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Hands-On Unity 2021 Game Development',
        desc: 'Create, customize, and optimize your own professional games from scratch with Unity 2021, 2nd Edition',
        url: 'https://www.amazon.com/gp/product/B095J4NXTT/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B095J4NXTT&linkCode=as2&tag=matsvlog-20&linkId=44b5eaa46edee589a51cbe19b99ab375',
      },
      {
        title: 'Introduction to Blender 3.0',
        author: 'Gianpiero Moioli',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1484279530&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Introduction to Blender 3.0',
        desc: 'Learn Organic and Architectural Modeling, Lighting, Materials, Painting, Rendering, and Compositing with Blender',
        url: 'https://www.amazon.com/gp/product/1484279530/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1484279530&linkCode=as2&tag=matsvlog-20&linkId=be73ed329403b15b70f08a75afb61a50',
      },
      {
        title: 'Real-Time Rendering',
        author: 'Tomas Akenine-Möller, Eric Haines, Naty Hoffman',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1138627003&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Real-Time Rendering',
        desc: 'Real-Time Rendering combines fundamental principles with guidance on the latest techniques to provide a complete reference on three-dimensional interactive computer graphics',
        url: 'https://www.amazon.com/gp/product/1138627003/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1138627003&linkCode=as2&tag=matsvlog-20&linkId=3ca3871af1fbcdcfb4ea2094302ebef3',
      },
      {
        title: 'The NFT Handbook',
        author: 'Nathan Real',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B09PMG2M6S&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'The NFT Handbook',
        desc: 'The 2022 Crash Course on How to Create, Sell and Buy Non-Fungible Tokens with Every Secret Revealed',
        url: 'https://www.amazon.com/gp/product/B09PMG2M6S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B09PMG2M6S&linkCode=as2&tag=matsvlog-20&linkId=6991d20c35f3c803b77d1a2dea2f78e9',
      },
      {
        title: 'Self-Sovereign Identity',
        author: 'Alex Preukschat, Drummond Reed',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1617296597&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Self-Sovereign Identity',
        desc: 'Decentralized digital identity and verifiable credentials',
        url: 'https://www.amazon.com/gp/product/1617296597/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1617296597&linkCode=as2&tag=matsvlog-20&linkId=055380842a086f2d8a7640e0e140d3a7',
      },
      {
        title: 'Ready Player One',
        author: 'Ernest Cline',
        img: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B004J4WKUQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Ready Player One',
        desc: 'Enchanting . . . Willy Wonka meets The Matrix.',
        url: 'https://www.amazon.com/gp/product/B004J4WKUQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004J4WKUQ&linkCode=as2&tag=matsvlog-20&linkId=4b7cb6cad42d62e1d93a8bb0d9281187',
      },
      {
        title: 'Cloud Computing',
        author: 'by Thomas Erl, Ricardo Puttini, Zaigham Mahmood',
        img: 'https:////ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0133387526&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Cloud Computing',
        desc: 'Concepts, Technology & Architecture',
        url: 'https://www.amazon.com/gp/product/0133387526/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0133387526&linkCode=as2&tag=matsvlog-20&linkId=b37a8db3130ce4fda704e0c72963ffd1',
      },
      {
        title: 'DAFX: Digital Audio Effects ',
        author: 'Udo Zölzer',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0470665998&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'DAFX: Digital Audio Effects ',
        desc: 'DAFX: Digital Audio Effects 2nd Edition',
        url: 'https://www.amazon.com/gp/product/0470665998/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0470665998&linkCode=as2&tag=matsvlog-20&linkId=31471897da595845ef61fb9e9b405d87',
      },
      {
        title: 'Digital Lighting and Rendering',
        author: 'Jeremy Birn',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00GFSAOMU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'Digital Lighting and Rendering',
        url: 'https://www.amazon.com/gp/product/B00GFSAOMU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GFSAOMU&linkCode=as2&tag=matsvlog-20&linkId=5a0cfe1c8e47bff9b0a38fa3fc2eabd4',
        desc: 'Digital Lighting and Rendering  (Voices That Matter) ',
      },
      {
        title: 'The Art of Game Design',
        author: 'Jesse Schell',
        img: 'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1138632058&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=matsvlog-20',
        alt: 'The Art of Game Design',
        desc: 'A Book of Lenses, Third Edition',
        url: 'https://www.amazon.com/gp/product/1138632058/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1138632058&linkCode=as2&tag=matsvlog-20&linkId=f58c40320ac076fb03db425708633acd',
      },
    ];
    setBooks(books);
  }, []);

  const linkSelected = (url) => {
    navigate(url);
  };

  return (
    <Flex width="100%">
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
                    <Td width="150px">
                      <CLink href={b.url} isExternal>
                        <Image
                          borderWidth="1px"
                          borderColor="teal.500"
                          borderStyle="solid"
                          w="130px"
                          h="150px"
                          src={b.img}
                          alt={b.alt}
                        />
                      </CLink>
                    </Td>
                    <Td>
                      <CLink href={b.url} isExternal>
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
