"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, TextInput, Container, Title, Card } from "@mantine/core";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      username,
      password,
    });

    if (result?.error) {
      console.error("Login error:", result.error);
    } else if (result?.ok) {
      if (username.includes("employer")) {
        router.push("/employer");
        return;
      }
      router.push("/");
    }
  };

  return (
    <Container>
      <Card>
        <Title mb={10}>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mt={10}
          />
          <Button type="submit" mt={20}>
            Sign In
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default SignIn;
