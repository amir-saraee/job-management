"use client";

import { useSearchParams } from "next/navigation";
import { Container, Title, Text } from "@mantine/core";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <Container>
      <Title>Authentication Error</Title>
      <Text>{error}</Text>
    </Container>
  );
};

export default ErrorPage;
