// Generates docs/index.html from paypay-plan.html so the artifact and the PWA
// never drift. The artifact file is a head-less fragment; the PWA needs a
// full document, so we wrap it here rather than maintaining two copies.
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync("paypay-plan.html", "utf8");
const title = src.match(/<title>(.*?)<\/title>/)[1];
const body = src.replace(/<title>.*?<\/title>\s*/, "");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="An 8-week PayPay backend (Java) interview plan for the Payments and Core Banking roles, with a question bank and week-by-week progress tracker.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="PayPay Prep">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="theme-color" content="#F2F5F4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101615" media="(prefers-color-scheme: dark)">
<style>
  html { margin: 0; }
  body { padding-left: max(24px, env(safe-area-inset-left)); padding-right: max(24px, env(safe-area-inset-right)); }
  .progress-head { top: env(safe-area-inset-top, 0px); }
</style>
</head>
<body>
${body}
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
</script>
</body>
</html>
`;

writeFileSync("docs/index.html", html);
console.log("docs/index.html written —", html.length, "bytes");
