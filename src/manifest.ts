import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "uniqtab",
  version: packageJson.version,
  description:
    "Automatically closes duplicate tabs, keeping only the latest one.",
  manifest_version: 3,
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  permissions: ["tabs"],
});
