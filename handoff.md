# 九州高尔夫行程网站交接记录

更新时间：2026-08-08（Asia/Shanghai）

## 已完成

- 九州高尔夫行程网站已更新并公开发布为 Sites 第 9 版。
- 若松高尔夫俱乐部照片已更换为该俱乐部官网的真实海景球场照片：玄界滩沿岸第 7 洞夕阳景观。
- 照片已保存为网站本地资源，避免访客浏览时依赖日本官网：
  `public/photos/wakamatsu-official/okinoshima03.png`
- 官网照片来源：`https://www.wakamatsu.or.jp/course03.php`
- 构建成功，2 项自动测试全部通过。
- GitHub `main` 已推送提交：`b9d07e48ed5c6ee3166051a6900c309adb7cdf10`
- Sites 部署成功：
  `https://kyushu-golf-journey.oliver918-tw.chatgpt.site`
- 已在线验证：网站 HTTP 200；新照片资源 HTTP 200，大小 274025 bytes。
- 回程航班已依最新资料改为：10月24日 MU5088，福冈 18:15 起飞，上海浦东 19:15 抵达。

## 域名状态

- `https://yayitech.com` 已能访问新版行程。
- 2026-08-08 已将 `www.yayitech.com` 的 CNAME 从旧目标 `www.yayitech.com.pages.dnsoe6.com` 改为 Sites 要求的 `custom-domains.chatgpt.site`，并已由新网权威 DNS 确认生效。
- `https://www.yayitech.com` 已完成 Sites 域名绑定；状态、托管服务及 SSL 均为 `active`。线上验证 HTTP 200，已显示新版球场行程与 MU5088 回程时间 18:15–19:15。
- 新网权威 DNS 仍同时返回新旧两组验证 TXT，导致验证尚未完成：
  - `_openai-site-verification.www.yayitech.com`
    - 应保留：`openai-site-verification=KXCmN43VKCRitnJ2wFjfVXZ0Huk-t82fhTd1GOuHRo8`
    - 仍残留：`openai-site-verification=DFg7Xbhl9Blh_G5JiXzxGMASUmXvipA3G25Wqm4BsW4`
  - `_cf-custom-hostname.www.yayitech.com`
    - 应保留：`0ef8424d-dc3d-4c69-bcfa-d4f543346d6c`
    - 仍残留：`51b5a4f9-b2ed-4430-9b93-2a5e30a4f270`
- 后续应请新网技术支持清除权威 DNS 中的两条旧 TXT 缓存/隐藏记录，然后再次刷新 Sites 自定义域名状态。

## 项目标识

- 本地目录：`C:\Users\olive\Documents\Workspace\kyushu-golf-trip-site`
- Sites 项目：`appgprj_6a535bc02c508191988c38611a9a581b`
- `www` 自定义域名：`appgdom_6a75be2915b08191aed8f4f546287b0d`
- Sites 第 9 版：`appgprj_6a535bc02c508191988c38611a9a581b~appgver_754b8f3d88c481919343bf80dde63356`
- 成功部署：`appgdep_6a75d71c5e048191a83e3abdad6852c1`
