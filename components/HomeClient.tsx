"use client";

import { useTina } from "tinacms/dist/react";
import HomeView, { HomeContent } from "@/components/HomeView";

type Props = {
  query: string;
  variables: { relativePath: string };
  data: { home: unknown };
};

// Wraps the page in Tina's live-editing context: in the /admin editor the page
// re-renders as you type. Outside the editor it just renders the saved content.
export default function HomeClient(props: Props) {
  const { data } = useTina(props);
  return <HomeView home={data.home as unknown as HomeContent} />;
}
