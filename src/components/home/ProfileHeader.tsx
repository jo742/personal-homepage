import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { PROFILE } from '@/data/profile';

export default function ProfileHeader() {
  const scrollToChat = () => {
    document.getElementById('twin-chat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative flex flex-col items-center text-center">
      {/* 简约背景装饰 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      {/* 头像 */}
      <div className="relative z-10 h-24 w-24 sm:h-28 sm:w-28">
        <Avatar className="relative h-full w-full rounded-full border border-primary/20 shadow-card">
          <AvatarImage src={PROFILE.avatarUrl} alt={PROFILE.name} />
          <AvatarFallback className="bg-secondary text-primary text-3xl font-serif font-medium">
            {PROFILE.avatarFallback}
          </AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-accent ring-2 ring-card" />
      </div>

      {/* 名字 */}
      <h1 className="relative z-10 mt-6 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
        {PROFILE.name}
      </h1>

      {/* 一句话介绍 */}
      <p className="relative z-10 mt-2 max-w-sm text-sm text-muted-foreground text-pretty sm:text-base">
        {PROFILE.tagline}
      </p>

      {/* 聊天入口按钮 */}
      <Button 
        onClick={scrollToChat} 
        size="lg"
        className="relative z-10 mt-8 px-8 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
      >
        <MessageCircle className="h-4 w-4" />
        与我对话
        <span className="ml-2 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/30"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground/50"></span>
        </span>
      </Button>
    </header>
  );
}
