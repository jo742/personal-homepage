import { PROFILE } from '@/data/profile';
import { MessageCircle, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="text-center">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">联系我</h3>
      <a
        href={`tel:${PROFILE.contacts[0].value}`}
        className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/50 border border-border/30 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:text-primary"
      >
        <MessageCircle className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">{PROFILE.contacts[0].value}</span>
        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </section>
  );
}