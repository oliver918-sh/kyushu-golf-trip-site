# 九州高尔夫行程资料更新实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将最新的 12 人住宿与四场球安排更新到既有公开行程网站，同时完全排除价格与套房信息。

**Architecture:** 继续使用现有单页 vinext/React 架构。结构化行程、球场与酒店资料保留在 `app/page.tsx`，视觉规则集中在 `app/globals.css`；渲染测试直接读取正式构建后的 Worker HTML，验证关键内容与排除项。

**Tech Stack:** React 19、Next.js 16、vinext、TypeScript、Node.js 内建测试框架、OpenAI Sites。

## Global Constraints

- 网站日期为 2026 年 10 月 18 日至 24 日，共 7 天 6 夜。
- 参加人数为 12 人。
- 不显示任何价格、税率、预约费用、收费数字或套房信息。
- 使用现有 Sites 项目与公开域名 `https://www.yayitech.com`，不得创建新站点。
- 保留当前视觉语言、Day 1 浦东机场图片与 Day 7 福冈景点图片。
- 运行时不依赖境外第三方图片 URL；新增图片必须保存到 `public/photos/`。

---

### Task 1: 建立最新资料的渲染契约

**Files:**
- Modify: `tests/rendered-html.test.mjs`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `dist/server/index.js` 的 Worker `fetch()` HTML 输出。
- Produces: 对人数、酒店、四场球、开球时间、服务内容与排除项的完整自动验证。

- [ ] **Step 1: 写入失败测试**

在现有测试的 HTML 断言中加入：

```js
assert.match(html, /12人同行/);
assert.match(html, /小仓丽嘉皇家酒店/);
assert.match(html, /BEB5门司港 by 星野度假村/);
assert.match(html, /若松高尔夫俱乐部/);
assert.match(html, /西日本乡村俱乐部/);
assert.match(html, /门司高尔夫俱乐部/);
assert.match(html, /小仓乡村俱乐部/);
assert.match(html, /11:03/);
assert.match(html, /11:30/);
assert.match(html, /10:07/);
assert.match(html, /无中场休息・连续击球/);
assert.doesNotMatch(html, /九州GC 八幡球场/);
assert.doesNotMatch(html, /JR九州站前酒店小仓/);
assert.doesNotMatch(html, /Junior Suite|套房|87,000|60,600|23,130|12,600|27,770|18,800|3,300|税率|预约费/);
```

- [ ] **Step 2: 构建旧页面并验证测试因资料尚未更新而失败**

Run: `npm run build && node --test tests/rendered-html.test.mjs`

Expected: FAIL；失败内容至少包含缺少“小仓丽嘉皇家酒店”或“西日本乡村俱乐部”。

- [ ] **Step 3: 提交测试契约**

```bash
git add tests/rendered-html.test.mjs
git commit -m "test: define updated itinerary content"
```

---

### Task 2: 更新人数、住宿与每日行程

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: Task 1 的 HTML 文字契约。
- Produces: `lodgings` 数据、住宿区块，以及更新后的 `days` 和旅程一览。

- [ ] **Step 1: 在 `app/page.tsx` 新增住宿资料**

```ts
const lodgings = [
  { city: "小仓", dates: "10月18日－21日 · 3晚", name: "小仓丽嘉皇家酒店", room: "标准单人房", notes: "单人入住 · 含早餐" },
  { city: "门司港", dates: "10月21日－24日 · 3晚", name: "BEB5门司港 by 星野度假村", room: "海景双床房", notes: "单人入住 · 禁烟 · 含早餐" },
] as const;
```

- [ ] **Step 2: 更新 Day 1 至 Day 6 的行程文字**

确保 Day 1 抵达“小仓丽嘉皇家酒店”；Day 2 为若松 11:03；Day 3 为西日本 11:30 连续击球；Day 4 转往 BEB5 门司港；Day 5 为门司 10:07；Day 6 为小仓 11:03。

- [ ] **Step 3: 更新旅程一览并新增住宿区块**

在 `#overview` 后插入 `#hotels`，卡片逐项渲染 `city`、`dates`、`name`、`room` 与 `notes`。将第四个事实数字改为 `12`，说明文字改为“人同行”；导航加入“住宿”。

- [ ] **Step 4: 在 `app/globals.css` 增加住宿区块样式**

使用现有 `--paper`、`--green`、`--gold` 色彩变量，创建两列 `.hotel-grid` 与 `.hotel-card`；移动端在现有断点下改为单列。不得引入新依赖或外部字体。

- [ ] **Step 5: 构建并运行测试，确认人数与酒店断言通过**

Run: `npm run build && node --test tests/rendered-html.test.mjs`

Expected: 球场资料完成前仍可 FAIL，但人数、酒店和旧酒店排除项不再是失败原因。

- [ ] **Step 6: 提交住宿与每日行程更新**

```bash
git add app/page.tsx app/globals.css
git commit -m "feat: update travelers and lodging"
```

---

### Task 3: 更新四场球、图片与线上版本

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Create or reuse: `public/photos/west-japan-course.*`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: Task 1 的球场与排除项测试，Task 2 的页面结构。
- Produces: 正确的四场球卡片、每日背景图、正式构建与现有 Sites 项目的新公开版本。

- [ ] **Step 1: 更新 `courses` 数据结构与卡片字段**

每个球场包含 `round`、`date`、`name`、`start`、`caddie`、`breakInfo`、`meal`，数据必须为：

```ts
[
  { round: "ROUND 01", date: "10月19日", name: "若松高尔夫俱乐部", start: "11:03", caddie: "含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
  { round: "ROUND 02", date: "10月20日", name: "西日本乡村俱乐部", start: "11:30", caddie: "不含杆弟服务", breakInfo: "无中场休息・连续击球", meal: "不含餐" },
  { round: "ROUND 03", date: "10月22日", name: "门司高尔夫俱乐部", start: "10:07", caddie: "不含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
  { round: "ROUND 04", date: "10月23日", name: "小仓乡村俱乐部", start: "11:03", caddie: "含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
]
```

球场卡片以日期、开球、杆弟、中场和餐食标签呈现，不显示费用。

- [ ] **Step 2: 更新每日背景图映射**

Day 2 使用现有若松球场本地图片；Day 3 使用已下载并检查的西日本乡村俱乐部本地图片，若无可靠图则复用现有中性球场图；Day 5 使用门司球场图；Day 6 使用小仓球场图。删除被覆盖的外部背景 URL 声明。

- [ ] **Step 3: 运行完整构建与测试**

Run: `npm run build`

Expected: exit 0，并生成 `dist/server/index.js`。

Run: `node --test tests/rendered-html.test.mjs`

Expected: 1 test passed、0 failed。

- [ ] **Step 4: 检查变更内容并提交**

Run: `git diff --check && git status --short`

Expected: 无空白错误；只包含本计划要求的文件。

```bash
git add app/page.tsx app/globals.css public/photos tests/rendered-html.test.mjs
git commit -m "feat: refresh Kyushu golf itinerary"
```

- [ ] **Step 5: 推送当前 `main` 并建立 Sites 版本**

推送当前 HEAD 到现有来源仓库；使用相同 commit SHA 打包 `dist/`、`.openai/hosting.json` 与所需静态资产；调用 Sites `save_site_version`，不得创建新项目。

- [ ] **Step 6: 发布现有公开站点并验证**

因站点存取模式为 public，使用公开部署流程并等待部署状态 `succeeded`。随后确认：

- `https://www.yayitech.com` 自定义域名状态为 `active`。
- `https://yayitech.com` 自定义域名状态为 `active`。
- 当前线上版本来源 commit SHA 等于本次发布的 HEAD。

- [ ] **Step 7: 返回公开网址**

向用户提供 `https://www.yayitech.com`，并简要列出已更新的人数、酒店、球场与不显示价格的结果。
