// Build the Tina admin (/admin) only when Tina Cloud credentials are present.
// This keeps production deploys working before the Tina Cloud project exists:
// with no creds we skip the admin build entirely and the site is unaffected.
import { execSync } from "node:child_process";

const hasCreds =
  !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasCreds) {
  console.log("[tina] credentials found — building the /admin editor");
  // --skip-cloud-checks: the Vercel build and Tina Cloud's re-indexing are both
  // triggered by the same GitHub push, so a schema change (e.g. a new field) makes
  // the local schema momentarily differ from the remote one. Without this flag that
  // race fails the whole deploy with ERR_CLOUD_CHECK_FAILED even for non-breaking
  // changes. Tina Cloud re-indexes from GitHub regardless, so skipping is safe.
  execSync("npx tinacms build --skip-cloud-checks", { stdio: "inherit" });
} else {
  console.log("[tina] no credentials — skipping /admin build (the site itself is unaffected)");
}
