// 数字分身知识库与回复引擎（本地驱动，无需后端）
import { PROFILE } from './profile';

const ABOUT = {
  identity: `我是江宇梦，一名研二学生，正在用 AI 学习做产品。`,
  doing: `我最近主要在尝试用 AI 做一些完整的小项目。`,
  interests: `我喜欢捣鼓 AI 应用，周末也爱去爬山、旅行，换换节奏。`,
  direction: `我比较擅长分析教育场景的痛点，比较关注 AI + 教育领域的应用这一方向。`,
};

// 关键词匹配规则（顺序即优先级）
const RULES: { keywords: string[]; reply: () => string }[] = [
  {
    keywords: ['在做什么', '现在做', '最近做', '忙什么', '在忙', '做什么的', '在搞'],
    reply: () => ABOUT.doing,
  },
  {
    keywords: ['兴趣', '爱好', '喜欢', '平时', '业余', '周末'],
    reply: () => ABOUT.interests,
  },
  {
    keywords: ['方向', '关心', '擅长', '关注', '研究', '领域', '做哪'],
    reply: () => ABOUT.direction,
  },
  {
    keywords: ['你是谁', '介绍一下', '介绍下', '你是', '身份', '职业', '学生', '干嘛的', '江宇梦'],
    reply: () => ABOUT.identity,
  },
  {
    keywords: ['梗', '搞笑', '幽默', '段子'],
    reply: () => pickJoke(),
  },
  {
    keywords: ['你好', 'hi', 'hello', '哈喽', '嗨', '在吗', '在么'],
    reply: () => `你好呀～我是江宇梦，正在用 AI 学习做产品。想了解什么尽管问。`,
  },
  {
    keywords: ['谢谢', '感谢', 'thanks'],
    reply: () => `不客气～${pickJoke()}`,
  },
];

// 干净的网络梗，偶尔抛一句，呼应「梗王」人设
const JOKES = [
  '懂的都懂。',
  '格局打开。',
  '这波啊，这波是稳中向好。',
  '我直接好家伙。',
  '别问，问就是在学习。',
  '稳住，我们能赢。',
];

function pickJoke(): string {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

export function getTwinReply(input: string): string {
  const q = input.trim().toLowerCase();
  if (!q) return '想问什么都可以，比如「你现在在做什么？」';
  for (const rule of RULES) {
    if (rule.keywords.some((k) => q.includes(k.toLowerCase()))) {
      return rule.reply();
    }
  }
  const guide = `这个问题我还真不一定答得准，不过我比较关注 AI + 教育领域，你可以问问这些，或者「你现在在做什么？」`;
  return Math.random() < 0.3 ? `${guide} ${pickJoke()}` : guide;
}

// 别人最可能问的 3 个问题（快捷提问）
export const QUICK_QUESTIONS = [
  '你现在主要在做什么？',
  '你擅长什么？',
  '平时喜欢做什么？',
];

export const TWIN_GREETING =
  `嗨～我是江宇梦，正在用 AI 学习做产品。想了解什么，直接问我就好～`;

export { PROFILE };
