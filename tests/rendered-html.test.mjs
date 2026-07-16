import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Kyushu golf itinerary", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /九州小仓・门司港高尔夫之旅/);
  assert.match(html, /MU517/);
  assert.match(html, /MU5088/);
  assert.match(html, /小仓乡村俱乐部/);
  assert.match(html, /若松高尔夫俱乐部/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
