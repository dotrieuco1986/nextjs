import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  styled,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "Next App" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding={6}
          bgGradient="linear(to-r, pink.500, pink.500, blue.500)"
          color="white"
        >
          <Flex align="center" mr={5}>
            <Link passHref href="/">
              <Heading as="a" size="lg" letterSpacing={"tighter"}>
                Chakra UI
              </Heading>
            </Link>
          </Flex>
        </Flex>
      </header>
      <Container maxW="container.xl" className={styles.container}>
        <main className={styles.footer}>{children}</main>
      </Container>
      <footer style={{ bottom: 0, marginBottom: "1rem" }}>
        <VStack>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </VStack>
      </footer>
    </>
  );
};

export default Layout;