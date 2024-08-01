"use client";

import AppLayout from "@/components/AppLayout";
import { AuthProvider } from "@/context/AuthContext";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <MantineProvider>
      <SessionProvider>
        <AuthProvider>
          <AppLayout>{children}</AppLayout>
        </AuthProvider>
      </SessionProvider>
    </MantineProvider>
  );
};

export default Providers;
