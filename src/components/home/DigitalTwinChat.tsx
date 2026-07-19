import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { getTwinReply, QUICK_QUESTIONS, TWIN_GREETING } from '@/data/twinKnowledge';

interface Msg {
  id: number;
  role: 'user' | 'twin';
  text: string;
}

let counter = 0;
const nextId = () => ++counter;

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: nextId(), role: 'twin', text: TWIN_GREETING },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q || typing) return;
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: q }]);
    setInput('');
    setTyping(true);
    window.setTimeout(() => {
      const reply = getTwinReply(q);
      setMessages((prev) => [...prev, { id: nextId(), role: 'twin', text: reply }]);
      setTyping(false);
    }, 650);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <Card className="group flex flex-col overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* 头部 */}
      <div className="flex items-center justify-between border-b border-border/50 bg-gradient-to-r from-primary/10 via-secondary/30 to-accent/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-9 w-9 border-2 border-primary/40 shadow-md shadow-primary/20">
              <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/30 text-sm font-serif text-primary">
                梦
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent ring-2 ring-card shadow-lg animate-pulse" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight text-foreground">
              数字分身
            </p>
            <p className="text-xs text-primary/70 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              在线对话
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-xs text-primary font-mono">AI</span>
        </div>
      </div>

      {/* 消息区 */}
      <div
        ref={scrollRef}
        className="thin-scroll max-h-80 min-h-[14rem] flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              'flex items-end gap-2',
              m.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {m.role === 'twin' && (
              <Avatar className="h-7 w-7 shrink-0 border border-primary/20">
                <AvatarFallback className="bg-primary/10 text-xs font-serif text-primary">
                  梦
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                'max-w-[80%] animate-fade-in px-4 py-2.5 text-sm leading-relaxed text-pretty',
                m.role === 'user'
                  ? 'rounded-2xl rounded-br-md bg-primary/20 text-foreground border border-primary/30'
                  : 'rounded-2xl rounded-bl-md bg-secondary/50 text-foreground border border-border/30'
              )}
            >
              {m.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-end gap-2">
            <Avatar className="h-7 w-7 shrink-0 border border-primary/20">
              <AvatarFallback className="bg-primary/10 text-xs font-serif text-primary">
                梦
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-secondary/50 px-4 py-3 border border-border/30">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:0ms]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary/60 [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* 快捷提问 */}
      <div className="flex flex-wrap gap-2 border-t border-border/50 px-4 pt-3">
        {QUICK_QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => send(q)}
            disabled={typing}
            className="rounded-full border border-border/50 bg-card/50 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary disabled:opacity-50"
          >
            {q}
          </button>
        ))}
      </div>

      {/* 输入区 */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3">
        <div className="relative flex-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入消息..."
            className="h-11 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
            aria-label="输入消息"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/50 font-mono">
            Enter
          </span>
        </div>
        <Button
          type="submit"
          size="icon"
          className="h-11 w-11 shrink-0 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
          disabled={!input.trim() || typing}
          aria-label="发送"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}
