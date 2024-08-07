"use client";

import {
  Modal,
  Text,
  Title,
  Button,
  Group,
  Stack,
  Divider,
} from "@mantine/core";
import { Job } from "@/types";

interface ApplyDialogProps {
  opened: boolean;
  onClose: () => void;
  job: Job;
}

const ApplyDialog = ({ opened, onClose, job }: ApplyDialogProps) => (
  <Modal
    opened={opened}
    onClose={onClose}
    title={<Title order={3}>Application Confirmation</Title>}
    centered
  >
    <Stack gap="md">
      <Text>
        Congratulations! You successfully applied to{" "}
        <strong>{job.company}</strong> for the position of{" "}
        <strong>{job.title}</strong>.
      </Text>
      <Divider my="sm" />

      <Group>
        <Button onClick={onClose} variant="outline">
          Close
        </Button>
        <Button color="blue" onClick={onClose}>
          Got it!
        </Button>
      </Group>
    </Stack>
  </Modal>
);

export default ApplyDialog;
