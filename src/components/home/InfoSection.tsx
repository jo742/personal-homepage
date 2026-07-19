import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROFILE } from '@/data/profile';
import { Sparkles, Mountain, Plane, Compass, Quote, Target } from 'lucide-react';

const interestIcons: Record<string, typeof Sparkles> = {
  'AI 应用': Sparkles,
  爬山: Mountain,
  旅行: Plane,
};

export default function InfoSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {/* 现在主要在做 */}
      <Card className="group h-full flex flex-col bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium text-primary">
            <Compass className="h-4 w-4" />
            <span>当前聚焦</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
            {PROFILE.doing}
          </p>
        </CardContent>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Card>

      {/* 我的兴趣 */}
      <Card className="group h-full flex flex-col bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>兴趣领域</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {PROFILE.interests.map((item) => {
              const Icon = interestIcons[item] ?? Sparkles;
              return (
                <Badge
                  key={item}
                  variant="secondary"
                  className="gap-1.5 rounded-full px-3 py-1.5 text-sm font-normal bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item}
                </Badge>
              );
            })}
          </div>
        </CardContent>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Card>

      {/* 我的特点 */}
      <Card className="group h-full flex flex-col bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium text-primary">
            <Target className="h-4 w-4" />
            <span>个人特质</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Quote className="h-4 w-4 text-primary/50 shrink-0" />
            <span className="text-sm font-semibold text-primary">{PROFILE.trait.title}</span>
          </div>
          <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
            {PROFILE.trait.desc}
          </p>
        </CardContent>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Card>
    </section>
  );
}
