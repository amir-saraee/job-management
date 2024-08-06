"use client";

import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const NewJobForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      description: "",
      number_positions: 1,
      isRemote: false,
      salary: 0,
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        withAsterisk
        label="Title"
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <TextInput
        withAsterisk
        label="Number of positions"
        key={form.key("number_positions")}
        {...form.getInputProps("number_positions")}
      />
      <TextInput
        withAsterisk
        label="Salary"
        key={form.key("salary")}
        {...form.getInputProps("salary")}
      />
      <Checkbox
        mt="md"
        label="Is remote job?"
        key={form.key("isRemote")}
        {...form.getInputProps("isRemote", { type: "checkbox" })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};

export default NewJobForm;
