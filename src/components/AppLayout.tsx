"use client";

import { useAuth } from "@/context/AuthContext";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, logout, login } = useAuth();

  return (
    <AppShell
      header={{ height: 70 }}
      padding="md"
      styles={(theme) => ({
        header: {
          backgroundColor: theme.colors.gray[0],
          borderBottom: `1px solid ${theme.colors.gray[3]}`,
          boxShadow: theme.shadows.sm,
        },
      })}
    >
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Flex justify="space-between" align="center" h="100%">
            <Group h="100%">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                color="black"
              />
              <Link href="/">
                <Title
                  order={1}
                  style={{
                    color: "#000",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Job Management
                </Title>
              </Link>
            </Group>

            {user ? (
              <Button
                color="red"
                onClick={() => logout()}
                variant="outline"
                size="md"
              >
                Logout
              </Button>
            ) : (
              <Button onClick={() => login()} size="md">
                Login
              </Button>
            )}
          </Flex>
        </Container>
      </AppShell.Header>
      <Container size="xl">
        <AppShell.Main>{children}</AppShell.Main>
      </Container>

      <Container size="xl">
        <Divider my="sm" />
        <Flex justify="space-between" align="center">
          <Group>
            <Link href="/">
              <Text size="md">Home</Text>
            </Link>
            <Link href="/">
              <Text size="md">About</Text>
            </Link>
            <Link href="/">
              <Text size="md">Contact</Text>
            </Link>
            <Link href="/">
              <Text size="md">Jobs</Text>
            </Link>
          </Group>

          <Group>
            <a href="#">
              <IconBrandTelegram size={24} color="gray" />
            </a>
            <a href="#">
              <IconBrandX size={24} color="gray" />
            </a>
            <a href="#">
              <IconBrandInstagram size={24} color="gray" />
            </a>
            <a href="#">
              <IconBrandLinkedin size={24} color="gray" />
            </a>
          </Group>
        </Flex>
        <Divider my="sm" />
        <Flex justify="center">
          <Text size="sm" color="dimmed">
            © 2024 Job Management. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </AppShell>
  );
};

export default AppLayout;
