const days = [
  { label: "DAY 01 · 10月18日（周日）", title: "MU517・上海出发・抵达小仓", route: "上海浦东T1 → 福冈国际航站楼 → Golf 5 → 小仓丽嘉皇家酒店", stops: [["06:50", "浦东T1集合"], ["09:50–12:55", "MU517飞往福冈"], ["12:55–14:20", "入境取行李"], ["15:40–16:40", "Golf 5购物1小时"], ["17:10", "酒店入住"], ["18:30", "团体晚餐"]] },
  { label: "DAY 02 · ROUND 01 · 10月19日", title: "若松高尔夫俱乐部", route: "含杆弟服务 · 有中场休息 · 餐食另付", stops: [["上午", "酒店出发・报到热身"], ["11:03", "开球"], ["球后", "沐浴返程"]] },
  { label: "DAY 03 · ROUND 02 · 10月20日", title: "西日本乡村俱乐部", route: "不含杆弟服务 · 不含餐 · 无中场休息・连续击球", stops: [["上午", "酒店出发・报到热身"], ["11:30", "开球"], ["球后", "返回小仓"]] },
  { label: "DAY 04 · CITY & PORT · 10月21日", title: "小仓城与门司港", route: "小仓丽嘉皇家酒店退房 → 小仓观光 → 门司港怀旧街区", stops: [["上午", "退房装车"], ["白天", "小仓观光"], ["下午", "前往门司港"], ["傍晚", "BEB5门司港入住"]] },
  { label: "DAY 05 · ROUND 03 · 10月22日", title: "门司高尔夫俱乐部", route: "不含杆弟服务 · 有中场休息 · 餐食另付", stops: [["上午", "酒店出发・报到热身"], ["10:07", "开球"], ["晚间", "港町散步"]] },
  { label: "DAY 06 · FINAL ROUND · 10月23日", title: "小仓乡村俱乐部", route: "含杆弟服务 · 有中场休息 · 餐食另付", stops: [["上午", "酒店出发・报到热身"], ["11:03", "开球"], ["球后", "沐浴返程"]] },
  { label: "DAY 07 · 10月24日（周六）", title: "MU5088・福冈返上海", route: "BEB5门司港 → 福冈机场国际航站楼 → 上海浦东T1", stops: [["09:30", "酒店早餐、退房及行李整理"], ["10:00", "门司港最后自由活动"], ["13:35", "从BEB5门司港出发前往福冈机场（约80–100分钟）"], ["15:15", "抵达福冈机场国际航站楼，办理值机及托运"], ["18:15", "东方航空MU5088起飞"], ["19:15", "抵达上海浦东T1"]] },
] as const;

const lodgings = [
  { city: "小仓", dates: "10月18日－21日 · 3晚", name: "小仓丽嘉皇家酒店", room: "标准单人房", notes: "单人入住 · 含早餐" },
  { city: "门司港", dates: "10月21日－24日 · 3晚", name: "BEB5门司港 by 星野度假村", room: "海景双床房", notes: "单人入住 · 禁烟 · 含早餐" },
] as const;

const courses = [
  { round: "ROUND 01", date: "10月19日", name: "若松高尔夫俱乐部", start: "11:03", caddie: "含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
  { round: "ROUND 02", date: "10月20日", name: "西日本乡村俱乐部", start: "11:30", caddie: "不含杆弟服务", breakInfo: "无中场休息・连续击球", meal: "不含餐" },
  { round: "ROUND 03", date: "10月22日", name: "门司高尔夫俱乐部", start: "10:07", caddie: "不含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
  { round: "ROUND 04", date: "10月23日", name: "小仓乡村俱乐部", start: "11:03", caddie: "含杆弟服务", breakInfo: "有中场休息", meal: "餐食另付" },
] as const;

const drives = [
  ["福冈机场 → 小仓", "75–90分钟"], ["小仓 → 门司港", "25–35分钟"],
  ["小仓 → 若松GC", "约45–55分钟"], ["小仓 → 西日本GC", "约40–50分钟"],
  ["BEB5 → 门司GC", "约25–35分钟"], ["BEB5 → 小仓GC", "约35–45分钟"],
  ["BEB5 → 福冈机场", "80–100分钟"],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主要导航">
        <a className="brand" href="#top">KYUSHU GOLF</a>
        <div className="nav-links"><a href="#hotels">住宿</a><a href="#journey">每日行程</a><a href="#courses">球场</a><a href="#drive">车程</a></div>
      </nav>

      <header className="hero" id="top">
        <img className="hero-art" src="/hero-welcome.png" alt="九州小仓与门司港，7天6夜，4场高尔夫" />
        <a className="scroll-cue" href="#overview" aria-label="查看旅程">SCROLL <span>↓</span></a>
      </header>

      <section className="facts" id="overview"><div className="wrap">
        <div className="section-head"><div><span className="eyebrow">THE JOURNEY</span><h2>旅程<br />一览</h2></div><p>上海浦东飞抵福冈后，直接乘专车前往小仓，先在小仓连续住宿3晚；第4天退房观光后再转往门司港，连续住宿3晚。</p></div>
        <div className="fact-grid"><div className="fact"><b>07</b><span>天数</span></div><div className="fact"><b>04</b><span>球场</span></div><div className="fact"><b>3＋3</b><span>小仓3晚・门司港3晚</span></div><div className="fact"><b>12</b><span>12人同行</span></div></div>
      </div></section>

      <section className="hotels" id="hotels"><div className="wrap">
        <div className="section-head"><div><span className="eyebrow">WHERE WE STAY</span><h2>两地<br />住宿</h2></div><p>小仓与门司港各住三晚，全程单人入住并含早餐，让打球与移动日都更从容。</p></div>
        <div className="hotel-grid">{lodgings.map((hotel) => <article className="hotel-card" key={hotel.city}><div className="hotel-meta"><span>{hotel.city}</span><strong>{hotel.dates}</strong></div><h3>{hotel.name}</h3><p>{hotel.room}</p><div className="hotel-notes">{hotel.notes}</div></article>)}</div>
      </div></section>

      <section className="days" id="journey"><div className="wrap section-head dark"><div><span className="eyebrow">DAILY PLAN</span><h2>每日<br />行程</h2></div><p>从城市夜景、名门球场到海港散步，七天行程松弛有度。</p></div>
        {days.map((day, index) => <article className={`day d${index + 1}`} key={day.label}><div className="day-content"><div className="day-no">{day.label}</div><div><h3>{day.title}</h3><p className="route">{day.route}</p><div className="timeline">{day.stops.map(([time, text]) => <span className="stop" key={`${time}-${text}`}><strong>{time}</strong>{text}</span>)}</div></div></div></article>)}
      </section>

      <section className="courses" id="courses"><div className="wrap">
        <div className="section-head dark"><div><span className="eyebrow">FOUR ROUNDS</span><h2>四座<br />球场</h2></div><p>四场球的开球时间、杆弟、中场休息与餐食安排均依最新资料更新。</p></div>
        <div className="course-grid">{courses.map((course) => <article className="course" key={course.name}><div className="course-kicker"><span className="num">{course.round}</span><span>{course.date}</span></div><h3>{course.name}</h3><div className="course-tags"><span>开球 {course.start}</span><span>{course.caddie}</span><span>{course.breakInfo}</span><span>{course.meal}</span></div></article>)}</div>
      </div></section>

      <section className="drive" id="drive"><div className="wrap">
        <div className="section-head"><div><span className="eyebrow">ON THE ROAD</span><h2>移动<br />节奏</h2></div><p>团队、球包与行李会增加上下车时间，首末日须按国际航班时间倒推。</p></div>
        <div className="drive-list">{drives.map(([route, time]) => <div className="drive-row" key={route}><span>{route}</span><strong>{time}</strong></div>)}</div>
        <div className="notice"><b>航班执行原则</b><br />去程建议起飞前约3小时在上海浦东机场集合；返程建议起飞前约4.5小时从门司港出发，并在起飞前约3小时抵达福冈机场国际航站楼。</div>
      </div></section>

      <footer className="footer"><div className="footer-inner"><div><b>九州小仓・门司港高尔夫之旅</b><br />2026年10月18日－24日 · 7天6夜 · 4场球 · 12人同行</div><div>车程为正常路况规划值，出发前请按实时导航确认。</div></div></footer>
    </main>
  );
}
