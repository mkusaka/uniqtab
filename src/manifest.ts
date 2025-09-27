import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "uniqtab",
  version: packageJson.version,
  description: "Close deduplicated tab.",
  manifest_version: 3,
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  permissions: ["tabs"],
});
