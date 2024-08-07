"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  Text,
  Button,
  Center,
  Title,
  Loader,
  Container,
  Image,
  Stack,
  Badge,
  Flex,
  Group,
} from "@mantine/core";
import { jobsData } from "@/utils/jobsData";
import ApplyDialog from "@/components/ApplyDialog";
import LoginDialog from "@/components/LoginDialog";
import { Job } from "@/types";
import { IconBuilding, IconMapPin } from "@tabler/icons-react";

const JobDetails = () => {
  const pathname = usePathname();
  const { user, appliedJobs, applyToJob } = useAuth();
  const [job, setJob] = useState<Job | null>(null);
  const [showApplyDialog, setShowApplyDialog] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const id = pathname.split("/").pop();

  const fetchJob = useCallback(() => {
    const job = jobsData.find((job) => job.id === Number(id));
    if (job) {
      setJob(job);
    } else {
      console.log("Job not found");
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [fetchJob, id]);

  const handleApply = () => {
    if (user) {
      applyToJob(Number(id));
      setShowApplyDialog(true);
    } else {
      setShowLoginDialog(true);
    }
  };

  if (!job) {
    return (
      <Center mt={20}>
        <Loader color="blue" />
      </Center>
    );
  }

  return (
    <Container>
      <Center mt={30}>
        <Card
          shadow="md"
          padding="lg"
          radius="md"
          withBorder
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Card.Section>
            <Image
              src={job.imageSrc || "/placeholder.png"}
              height={300}
              alt={job.title}
              radius="md"
            />
          </Card.Section>
          <Stack gap="md" mt="md">
            <Title order={2}>{job.title}</Title>
            <Group justify="space-between">
              <Group>
                <Flex gap="xs" align="center">
                  <IconBuilding size={20} color="gray" />
                  <Text size="md" color="dimmed">
                    {job.company}
                  </Text>
                </Flex>
                <Flex gap="xs" align="center">
                  <IconMapPin size={20} color="gray" />
                  <Text size="md" color="dimmed">
                    {user
                      ? job.address
                      : job.address.split(",").slice(1).join(", ")}
                  </Text>
                </Flex>
              </Group>
              {job.easyApply && (
                <Badge color="pink" size="lg" variant="light">
                  Easy Apply
                </Badge>
              )}
            </Group>

            <Text size="md" color="dimmed">
              {job.about}
            </Text>
            <Button
              onClick={handleApply}
              disabled={!!appliedJobs[Number(id)]}
              size="md"
              fullWidth
              mt="lg"
              color="green"
            >
              {appliedJobs[Number(id)] ? "Already Applied" : "Apply Now"}
            </Button>
          </Stack>
          <ApplyDialog
            opened={showApplyDialog}
            onClose={() => setShowApplyDialog(false)}
            job={job}
          />
          <LoginDialog
            opened={showLoginDialog}
            onClose={() => setShowLoginDialog(false)}
          />
        </Card>
      </Center>
    </Container>
  );
};

export default JobDetails;
