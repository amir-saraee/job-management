"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Card, Grid, Skeleton, Text, Title } from "@mantine/core";
import { Job } from "@/types";
import axiosInstance from "@/utils/axiosConfig";

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/jobs");

      console.log({ response });

      setJobs(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <Box>
      <Title order={2} mb={10}>
        List of jobs
      </Title>
      {isLoading && (
        <>
          <Card shadow="sm" padding="lg">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <Box mb={30} key={item}>
                  <Skeleton height={16} width={500} radius="xl" />
                  <Skeleton height={8} width={300} mt={6} radius="xl" />
                </Box>
              );
            })}
          </Card>
        </>
      )}
      <Grid>
        {!isLoading &&
          jobs.map((job) => (
            <Grid.Col span={4} key={job.id} mb={10}>
              <Card shadow="sm" padding="lg">
                <Text mb={10}>
                  {job.title} at {job.company}
                </Text>

                <Link href={`/jobs/${job.id}`} style={{ color: "#fff" }}>
                  <Button size="sm" fullWidth>
                    View Details
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          ))}
      </Grid>
    </Box>
  );
};

export default JobList;
