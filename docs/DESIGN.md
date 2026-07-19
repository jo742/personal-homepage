## Vibe
- Japanese minimalist stationery × airy watercolor wash（日式极简文具 × 水彩晕染）：大面积留白的近白纸面，被极浅蓝水彩晕染轻柔打破；信息靠排版与呼吸节奏分层，而非卡片堆叠

## Color
- Primary: #1E6FD6
- On Primary: #FFFFFF
- Accent: #14B8C7
- On Accent: #062430
- Background: #F6FAFF
- Foreground: #10243B
- Muted: #EAF1FB
- Border: #C3D4EC
- Secondary: #DDE9FB
[色彩规则：
- Primary 为洁净中蓝（白字对比 ~4.9:1），仅落按钮/链接/激活态/图标；Accent 青蓝与 Primary 色相差 ~28°，用于小面积点缀（标签/数字分身指示）
- 背景/卡片/操作区一律中性近白与极浅蓝，禁纯蓝大色块铺底；浅蓝感由 Muted/Secondary 微染提供
- 次操作用 Secondary 底 + Primary 字；输入区白底 + Border 描边，禁白底无边
- Card 白面浮于 #F6FAFF 之上，靠 1px Border 与极浅蓝底色差分层，不用通用投影]

## Typography
- Heading: Noto Serif SC (family: "Noto Serif SC", weight: 600, url: https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600&display=swap)
- Body: Noto Sans SC (family: "Noto Sans SC", weight: 400, url: https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500&display=swap)
[标题宋体显编辑感与清新气质，正文黑体保证可读；标题与正文跨族对比，字号差 ≥1.5 倍]

## Visual Language
- 核心视觉签名：水彩晕染纸纹——头像与分身区背后置一团 SVG 有机模糊水彩（feTurbulence + 高斯模糊）的极浅蓝晕染，配全页极淡圆点纸纹底，营造手作纸面质感
- 材质与深度：白卡浮于浅蓝纸面，仅以 1px 浅蓝灰描边与底色微差建立层次，禁通用投影；水彩晕染提供唯一柔光深度
- 容器与按钮：卡片直角偏小圆角（radius 微量）、描边而非阴影；主按钮 Primary 实心、次按钮 Secondary 浅底描边、输入框白底描边聚焦转 Primary
- 布局节奏：单列居中窄栏（max-w 适中），头部—信息—聊天三段以大留白分隔；强调色仅点在头像描边、激活态、分身指示点

## Animation
- 入场：头像水彩晕染先淡入展开（400ms ease-out），名字/介绍依次上浮（120ms 错峰）
- 交互：聊天消息自下而上淡入位移（180ms），发送按钮 hover 轻微下沉
- 滚动/过渡：信息卡片随滚动 intersect 渐显（240ms）

## Forbidden
- 禁纯蓝大色块/蓝紫渐变铺底充当视觉签名
- 禁 Emoji 作图标、CSS 伪装 Logo、系统默认展示字体
- 禁圆角卡片堆叠+通用投影建立层次（用纸纹、描边与排版分层）

## Additional Notes
- 所有可见文案为中文
- 适配手机：单列布局，字号/间距按移动端缩放，聊天输入框与发送按钮触控友好（≥48px）
- 数字分身预设问答库本地驱动，无需后端
