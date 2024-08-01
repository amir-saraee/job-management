"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useSession, signIn, signOut } from "next-auth/react";

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  appliedJobs: Record<number, boolean>;
  applyToJob: (jobId: number) => void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [appliedJobs, setAppliedJobs] = useState<Record<number, boolean>>({});
  const [user, setUser] = useState<User | null>(null);

  console.log({ session, user });

  useEffect(() => {
    if (session?.user) {
      setUser(session.user as User);
    } else {
      setUser(null);
    }
  }, [session]);

  const login = () => signIn();
  const logout = () => signOut();
  const applyToJob = (jobId: number) =>
    setAppliedJobs({ ...appliedJobs, [jobId]: true });

  return (
    <AuthContext.Provider
      value={{ user, login, logout, appliedJobs, applyToJob }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
