"use client";

import { Dialog, Modal, Text } from "@mantine/core";
import { Job } from "@/types";

interface ApplyDialogProps {
  opened: boolean;
  onClose: () => void;
  job: Job;
}

const ApplyDialog = ({ opened, onClose, job }: ApplyDialogProps) => (
  <Modal opened={opened} onClose={onClose}>
    <Text>
      You’ve applied to {job.company} to work as a {job.title}
    </Text>
  </Modal>
);

export default ApplyDialog;
