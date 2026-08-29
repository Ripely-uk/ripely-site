// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main";
var textarea = { component: "textarea" };
var config_default = defineConfig({
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
        // The router maps this doc to "/" so the editor opens the live page with
        // an editable sidebar (contextual/visual editing via useTina on the page).
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineAccent", label: "Headline \u2014 highlighted end" },
              { type: "string", name: "sub", label: "Sub-heading", ui: textarea },
              { type: "string", name: "ctaPrimary", label: "Primary button" },
              { type: "string", name: "ctaSecondary", label: "Secondary button" }
            ]
          },
          {
            type: "object",
            name: "problem",
            label: "Problem band",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "lead", label: "Lead", ui: textarea }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.num }) },
            fields: [
              { type: "string", name: "num", label: "Number" },
              { type: "string", name: "label", label: "Label", ui: textarea },
              { type: "string", name: "note", label: "Note" }
            ]
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
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: textarea }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "approach",
            label: "Approach section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "leadStart", label: "Lead \u2014 start", ui: textarea },
              { type: "string", name: "leadEmphasis", label: "Lead \u2014 highlighted phrase" },
              { type: "string", name: "leadEnd", label: "Lead \u2014 end", ui: textarea },
              {
                type: "object",
                name: "points",
                label: "Points",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "kicker", label: "Kicker" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: textarea }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: textarea }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
