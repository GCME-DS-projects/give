import { authClient } from "../lib/auth-client";


export default function Home() {
  const { isPending: isLoading } = authClient.useSession();
  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }
  return <div>Welcome to the Home page!</div>;
}
