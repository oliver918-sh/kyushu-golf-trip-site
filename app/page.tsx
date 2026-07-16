const days = [
  { label: "DAY 01 · 10月18日（周日）", title: "MU517・上海出发・抵达小仓", route: "上海浦东T1 → 福冈国际航站楼 → Golf 5 → JR九州站前酒店小仓", stops: [["06:50", "浦东T1集合"], ["09:50–12:55", "MU517飞往福冈"], ["12:55–14:20", "入境取行李"], ["15:40–16:40", "Golf 5购物1小时"], ["17:10", "小仓酒店入住"], ["18:30", "团体晚餐"]] },
  { label: "DAY 02 · ROUND 01", title: "小仓乡村俱乐部", route: "上田治设计 · 丘陵战略型球场", stops: [["09:15", "酒店出发"], ["09:45", "报到热身"], ["11:00", "开球"], ["16:00", "沐浴返程"]] },
  { label: "DAY 03 · ROUND 02", title: "九州GC 八幡球场", route: "加藤俊辅设计 · 黑川纪章会所", stops: [["09:20", "酒店出发"], ["09:45", "报到热身"], ["11:00", "开球"], ["晚间", "整理行李"]] },
  { label: "DAY 04 · CITY & PORT", title: "小仓城与门司港", route: "退房 → 小仓城庭园 → 门司港怀旧街区", stops: [["10:00", "退房装车"], ["10:15", "小仓城"], ["16:00", "前往门司港"], ["17:00", "BEB5入住"]] },
  { label: "DAY 05 · ROUND 03", title: "门司高尔夫俱乐部", route: "上田治代表作 · 历史名门挑战日", stops: [["09:00", "酒店出发"], ["09:30", "报到热身"], ["11:00", "开球"], ["晚间", "港町散步"]] },
  { label: "DAY 06 · FINAL ROUND", title: "若松高尔夫俱乐部", route: "玄界滩海风 · 海滨收官之战", stops: [["08:40", "酒店出发"], ["09:30", "报到热身"], ["11:00", "开球"], ["16:00", "沐浴返程"]] },
  { label: "DAY 07 · 10月24日（周六）", title: "MU5088・福冈返上海", route: "BEB5门司港 → 福冈机场国际航站楼 → 上海浦东T1", stops: [["08:00–09:30", "早餐及退房"], ["09:30–11:15", "门司港自由活动"], ["11:45", "门司港出发"], ["13:15", "抵达福冈机场"], ["16:15–19:15", "MU5088飞往上海浦东"]] },
] as const;

const courses = [
  ["ROUND 01", "小仓乡村俱乐部", "自然与策略交织，名物洞“鹤之首”考验第二杆方向与距离。", "酒店出发约30分钟", "093-471-7611"],
  ["ROUND 02", "九州GC 八幡球场", "长距离与水障碍构成鲜明挑战，会所建筑本身也值得欣赏。", "酒店出发约20–25分钟", "093-652-2221"],
  ["ROUND 03", "门司高尔夫俱乐部", "历史厚重、果岭与沙坑极具防守性，是四场中最具挑战的一轮。", "BEB5出发约25–35分钟", "093-481-0711"],
  ["ROUND 04", "若松高尔夫俱乐部", "面向玄界滩的海滨球场，风向与风力让每一次选杆都充满变化。", "BEB5出发约45–55分钟", "093-741-1231"],
] as const;

const drives = [
  ["福冈机场 → 小仓", "75–90分钟"], ["小仓 → 门司港", "25–35分钟"],
  ["BEB5 → 门司GC", "25–35分钟"], ["BEB5 → 若松GC", "45–55分钟"],
  ["BEB5 → 福冈机场", "80–100分钟"],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主要导航">
        <a className="brand" href="#top">KYUSHU GOLF</a>
        <div className="nav-links"><a href="#journey">每日行程</a><a href="#courses">球场</a><a href="#drive">车程</a></div>
      </nav>

      <header className="hero" id="top">
        <img className="hero-art" src="/hero-welcome.png" alt="九州小仓与门司港，7天6夜，4场高尔夫" />
        <a className="scroll-cue" href="#overview" aria-label="查看旅程">SCROLL <span>↓</span></a>
      </header>

      <section className="facts" id="overview"><div className="wrap">
        <div className="section-head"><div><span className="eyebrow">THE JOURNEY</span><h2>旅程<br />一览</h2></div><p>上海浦东飞抵福冈后，直接乘专车前往小仓，先在小仓连续住宿3晚；第4天退房观光后再转往门司港，连续住宿3晚。</p></div>
        <div className="fact-grid"><div className="fact"><b>07</b><span>天数</span></div><div className="fact"><b>04</b><span>球场</span></div><div className="fact"><b>3＋3</b><span>小仓3晚・门司港3晚</span></div><div className="fact"><b>11:00</b><span>统一开球时间</span></div></div>
      </div></section>

      <section className="days" id="journey"><div className="wrap section-head dark"><div><span className="eyebrow">DAILY PLAN</span><h2>每日<br />行程</h2></div><p>从城市夜景、名门球场到海港散步，七天行程松弛有度。</p></div>
        {days.map((day, index) => <article className={`day d${index + 1}`} key={day.label}><div className="day-content"><div className="day-no">{day.label}</div><div><h3>{day.title}</h3><p className="route">{day.route}</p><div className="timeline">{day.stops.map(([time, text]) => <span className="stop" key={`${time}-${text}`}><strong>{time}</strong>{text}</span>)}</div></div></div></article>)}
      </section>

      <section className="courses" id="courses"><div className="wrap">
        <div className="section-head dark"><div><span className="eyebrow">FOUR ROUNDS</span><h2>四座<br />球场</h2></div><p>从丘陵战略型到海滨林克斯，四场球各有性格。团队预约时请一并确认开球、球车、球童与球包运输安排。</p></div>
        <div className="course-grid">{courses.map(([round, name, description, drive, phone]) => <article className="course" key={name}><span className="num">{round}</span><h3>{name}</h3><p>{description}</p><dl><dt>车程</dt><dd>{drive}</dd><dt>电话</dt><dd><a href={`tel:${phone}`}>{phone}</a></dd></dl></article>)}</div>
      </div></section>

      <section className="drive" id="drive"><div className="wrap">
        <div className="section-head"><div><span className="eyebrow">ON THE ROAD</span><h2>移动<br />节奏</h2></div><p>团队、球包与行李会增加上下车时间，首末日须按国际航班时间倒推。</p></div>
        <div className="drive-list">{drives.map(([route, time]) => <div className="drive-row" key={route}><span>{route}</span><strong>{time}</strong></div>)}</div>
        <div className="notice"><b>航班执行原则</b><br />去程建议起飞前约3小时在上海浦东机场集合；返程建议起飞前约4.5小时从门司港出发，并在起飞前约3小时抵达福冈机场国际航站楼。</div>
        <div className="notice"><b>开业提醒</b><br />BEB5门司港预计于2026年7月24日开业。如出行早于该日期，需更换后3晚住宿。</div>
      </div></section>

      <footer className="footer"><div className="footer-inner"><div><b>九州小仓・门司港高尔夫之旅</b><br />7天6夜 · 4场球 · 团体行程</div><div>车程为正常路况规划值，出发前请按实时导航确认。</div></div></footer>
    </main>
  );
}
