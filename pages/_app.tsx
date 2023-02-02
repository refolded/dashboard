import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "reflect-metadata";
import { QueryClient, QueryClientProvider } from "react-query";
import { GraphQLClient } from "graphql-request";

const queryClient = new QueryClient();

export const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_URL as string,
  {
    headers: {},
  }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
