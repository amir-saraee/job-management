"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  Text,
  Button,
  Dialog,
  Center,
  Title,
  Loader,
} from "@mantine/core";
import { Job } from "@/types";
import ApplyDialog from "@/components/ApplyDialog";
import LoginDialog from "@/components/LoginDialog";
import axiosInstance from "@/utils/axiosConfig";

const JobDetails: React.FC = () => {
  const pathname = usePathname();
  const { user, appliedJobs, applyToJob } = useAuth();
  const [job, setJob] = useState<Job | null>(null);
  const [showApplyDialog, setShowApplyDialog] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const id = pathname.split("/").pop();

  const fetchJob = useCallback(async () => {
    try {
      const response = await axiosInstance.get<Job>(`/jobs/${id}`);
      setJob(response.data);
    } catch (err) {
      console.log(err);
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

  if (!job)
    return (
      <Center mt={20}>
        <Loader color="blue" />
      </Center>
    );

  return (
    <Center w={600} ml="auto" mr="auto">
      <Card shadow="sm" padding="lg" w="100%">
        <Title order={3}>
          {job.title} at {job.company}
        </Title>
        <Text>{job.about}</Text>
        <Text>
          {user ? job.address : job.address.split(",").slice(1).join(", ")}
        </Text>
        <Button
          onClick={handleApply}
          disabled={!!appliedJobs[Number(id)]}
          mt={20}
        >
          {appliedJobs[Number(id)] ? "Already Applied" : "Apply Now"}
        </Button>

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
  );
};

export default JobDetails;
