import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
      <Toaster />
    </>
  );
}
