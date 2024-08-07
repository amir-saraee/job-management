"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import {
  Button,
  TextInput,
  Container,
  Title,
  Card,
  Stack,
  Text,
  Divider,
  Center,
  Notification,
} from "@mantine/core";
import { IconLogin, IconAlertCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      username,
      password,
    });

    if (result?.error) {
      setError("Invalid username or password. Please try again.");
    } else if (result?.ok) {
      setError(null);
      if (username.includes("employer")) {
        router.push("/employer");
        return;
      }
      router.push("/");
    }
  };

  return (
    <Container size="xs" my={40}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Center mb={20}>
          <Title order={2}>Welcome Back!</Title>
        </Center>
        <Divider my="sm" />
        <Text size="sm" color="dimmed" mb={20}>
          Please enter your username and password to sign in. If you dont have
          an account, you can sign up easily.
        </Text>
        {error && (
          <Notification
            icon={<IconAlertCircle size={18} />}
            color="red"
            onClose={() => setError(null)}
            mb={20}
          >
            {error}
          </Notification>
        )}
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              size="md"
              color="blue"
              radius="md"
              mt="lg"
              rightSection={<IconLogin size={20} />}
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default SignIn;
