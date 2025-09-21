"use client";
import React from "react";
import { authClient } from "../lib/auth-client";
import { Alert } from "@give/shared/index";

export default function Home() {
  const { isPending: isLoading } = authClient.useSession();
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading... <Alert>hi there!!!</Alert></div>;
  }
  return <div>Welcome to the Home page!</div>;
}
