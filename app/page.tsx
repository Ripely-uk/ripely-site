import { client } from "@/tina/__generated__/client";
import HomeClient from "@/components/HomeClient";
import HomeView, { HomeContent } from "@/components/HomeView";
import homeJson from "@/content/home/index.json";

export default async function Home() {
  try {
    const res = await client.queries.home({ relativePath: "index.json" });
    return <HomeClient data={res.data} query={res.query} variables={res.variables} />;
  } catch {
    // No Tina backend reachable at build time (e.g. a preview deploy without
    // credentials) — render the saved content statically, editing disabled.
    return <HomeView home={homeJson as unknown as HomeContent} />;
  }
}
