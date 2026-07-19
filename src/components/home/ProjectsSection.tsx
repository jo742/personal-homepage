import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROFILE } from '@/data/profile';
import { FolderOpen, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section>
      <Card className="group overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-medium text-primary">
            <FolderOpen className="h-4 w-4" />
            <span>作品展示</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {PROFILE.projects.map((project, index) => (
            <div
              key={project.title}
              className="group/item p-3 rounded-lg bg-secondary/20 border border-border/30 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30"
              style={{ animationDelay: `${450 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <a
                  href={project.link}
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="gap-1 rounded-full px-2.5 py-1 text-xs font-normal bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}