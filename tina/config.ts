import { defineConfig } from "tinacms";

// The branch Tina reads/writes. On Vercel this follows the deployed branch.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

const textarea = { component: "textarea" as const };

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home page",
        path: "content/home",
        format: "json",
        // One fixed document; editors change its text, they don't add/remove it.
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineAccent", label: "Headline — highlighted end" },
              { type: "string", name: "sub", label: "Sub-heading", ui: textarea },
              { type: "string", name: "ctaPrimary", label: "Primary button" },
              { type: "string", name: "ctaSecondary", label: "Secondary button" },
            ],
          },
          {
            type: "object",
            name: "problem",
            label: "Problem band",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "lead", label: "Lead", ui: textarea },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item: { num?: string }) => ({ label: item?.num }) },
            fields: [
              { type: "string", name: "num", label: "Number" },
              { type: "string", name: "label", label: "Label", ui: textarea },
              { type: "string", name: "note", label: "Note" },
            ],
          },
          {
            type: "object",
            name: "product",
            label: "Product section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading", ui: textarea },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                ui: { itemProps: (item: { title?: string }) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: textarea },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "approach",
            label: "Approach section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "leadStart", label: "Lead — start", ui: textarea },
              { type: "string", name: "leadEmphasis", label: "Lead — highlighted phrase" },
              { type: "string", name: "leadEnd", label: "Lead — end", ui: textarea },
              {
                type: "object",
                name: "points",
                label: "Points",
                list: true,
                ui: { itemProps: (item: { title?: string }) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "kicker", label: "Kicker" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: textarea },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: textarea },
            ],
          },
        ],
      },
    ],
  },
});
