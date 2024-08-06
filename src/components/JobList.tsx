"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Card, Grid, Skeleton, Text, Title } from "@mantine/core";
import { jobsData } from "@/utils/jobsData";
import { Job } from "@/types";

const JobList = () => {
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      // Simulating data fetch with static data
      setTimeout(() => {
        setData(jobsData);
        setIsLoading(false);
      }, 500); // Simulate network delay
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, []);

  return (
    <Box>
      <Title order={2} mb={10}>
        List of jobs
      </Title>
      {isLoading && (
        <>
          <Card shadow="sm" padding="lg">
            {[1, 2, 3, 4, 5].map((item) => (
              <Box mb={30} key={item}>
                <Skeleton height={16} width={500} radius="xl" />
                <Skeleton height={8} width={300} mt={6} radius="xl" />
              </Box>
            ))}
          </Card>
        </>
      )}
      <Grid>
        {!isLoading &&
          data.map((job) => (
            <Grid.Col span={4} key={job.id} mb={10}>
              <Card shadow="sm" padding="lg">
                <Text mb={10}>
                  {job.title} at {job.company}
                </Text>
                <Link href={`/jobs/${job.id}`} passHref>
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
