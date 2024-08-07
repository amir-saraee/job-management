"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Skeleton,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { jobsData } from "@/utils/jobsData";
import { Job } from "@/types";
import {
  IconArrowRightToArc,
  IconBuilding,
  IconMapPin,
} from "@tabler/icons-react";

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
    <Container size="xl">
      <Box mb={30}>
        <Title order={1} mt={30}>
          Explore Exciting Job Opportunities
        </Title>
        <Text color="dimmed" size="lg" mt="sm">
          Find your dream job from our extensive list of openings
        </Text>
      </Box>

      {isLoading && (
        <Grid>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid.Col span={4} key={item}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Skeleton height={160} radius="md" />
                <Group justify="space-between" mt="md" mb="lg">
                  <Skeleton height={8} width={200} radius="xl" />
                  <Skeleton height={8} width={100} mt={6} radius="xl" />
                </Group>
                <Text size="sm" color="dimmed">
                  <Skeleton height={8} width={300} mt={6} radius="xl" />
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}

      {!isLoading && (
        <Grid>
          {data.map((job) => (
            <Grid.Col span={{ md: 4, xs: 12 }} key={job.id}>
              <Card shadow="md" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={job.imageSrc || "/placeholder.png"}
                    height={160}
                    alt={job.title}
                    radius="md"
                  />
                </Card.Section>

                <Group mt="md" mb="lg" justify="space-between">
                  <Text fw={500} size="lg">
                    {job.title}
                  </Text>
                  {job.easyApply && (
                    <Badge color="pink" variant="light">
                      Easy Apply
                    </Badge>
                  )}
                </Group>

                <Stack gap="xs">
                  <Flex gap="xs" align="center">
                    <IconBuilding size={16} color="gray" />
                    <Text size="sm" color="dimmed">
                      {job.company}
                    </Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconMapPin size={16} color="gray" />
                    <Text size="sm" color="dimmed">
                      {job.address}
                    </Text>
                  </Flex>
                </Stack>

                <Text size="sm" color="dimmed" mt="md" lineClamp={2}>
                  {job.about}
                </Text>

                <Link href={`/jobs/${job.id}`} passHref>
                  <Button
                    rightSection={<IconArrowRightToArc size={20} />}
                    mt="xl"
                    fullWidth
                  >
                    View Details
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default JobList;
