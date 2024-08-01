"use client";

import { useAuth } from "@/context/AuthContext";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Skeleton,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, logout, login } = useAuth();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Flex justify="space-between" align="center" h="100%">
            <Group h="100%" px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Link href="/">
                <Title style={{ color: "#000", fontSize: 24 }}>
                  Job Management
                </Title>
              </Link>
            </Group>

            {user ? (
              <Button color="red" onClick={() => logout()}>
                Logout
              </Button>
            ) : (
              <Button onClick={() => login()}>Login</Button>
            )}
          </Flex>
        </Container>
      </AppShell.Header>
      <Container size="xl">
        <AppShell.Main>{children}</AppShell.Main>
      </Container>
    </AppShell>
  );
};

export default AppLayout;
