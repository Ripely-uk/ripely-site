// Build the Tina admin (/admin) only when Tina Cloud credentials are present.
// This keeps production deploys working before the Tina Cloud project exists:
// with no creds we skip the admin build entirely and the site is unaffected.
import { execSync } from "node:child_process";

const hasCreds =
  !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasCreds) {
  console.log("[tina] credentials found — building the /admin editor");
  execSync("npx tinacms build", { stdio: "inherit" });
} else {
  console.log("[tina] no credentials — skipping /admin build (the site itself is unaffected)");
}
