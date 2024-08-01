"use client";

import { Dialog, Button, Modal, Box, Center } from "@mantine/core";
import { useAuth } from "@/context/AuthContext";

interface LoginDialogProps {
  opened: boolean;
  onClose: () => void;
}

const LoginDialog = ({ opened, onClose }: LoginDialogProps) => {
  const { login } = useAuth();

  return (
    <Modal opened={opened} onClose={onClose}>
      <Center>
        <Button onClick={() => login()}>Log In with NextAuth</Button>
      </Center>
    </Modal>
  );
};

export default LoginDialog;
