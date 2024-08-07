"use client";

import {
  Dialog,
  Button,
  Modal,
  Box,
  Center,
  Text,
  Stack,
  Title,
  Divider,
} from "@mantine/core";
import { useAuth } from "@/context/AuthContext";
import { IconLogin } from "@tabler/icons-react";

interface LoginDialogProps {
  opened: boolean;
  onClose: () => void;
}

const LoginDialog = ({ opened, onClose }: LoginDialogProps) => {
  const { login } = useAuth();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>Welcome Back!</Title>}
      centered
      padding="lg"
      radius="md"
    >
      <Stack gap="md" align="center">
        <Text size="md" color="dimmed">
          Please log in to continue to your account. If you don’t have an
          account, sign up is quick and easy.
        </Text>
        <Divider my="sm" />
        <Button
          onClick={() => login()}
          size="md"
          color="blue"
          radius="md"
          rightSection={<IconLogin size={18} />}
        >
          Log In with NextAuth
        </Button>
      </Stack>
    </Modal>
  );
};

export default LoginDialog;
