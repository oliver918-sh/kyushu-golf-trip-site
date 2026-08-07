import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
  assert.match(html, /12人同行/);
  assert.match(html, /小仓丽嘉皇家酒店/);
  assert.match(html, /BEB5门司港 by 星野度假村/);
  assert.match(html, /西日本乡村俱乐部/);
  assert.match(html, /11:03/);
  assert.match(html, /11:30/);
  assert.match(html, /10:07/);
  assert.match(html, /无中场休息・连续击球/);
  assert.doesNotMatch(html, /九州GC 八幡球场/);
  assert.doesNotMatch(html, /JR九州站前酒店小仓/);
  assert.doesNotMatch(html, /Junior Suite|套房|87,000|60,600|23,130|12,600|27,770|18,800|3,300|税率|预约费/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("uses the official Wakamatsu seaside course photo", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /wakamatsu-official\/okinoshima03\.png/);
  await access(new URL("../public/photos/wakamatsu-official/okinoshima03.png", import.meta.url));
});
