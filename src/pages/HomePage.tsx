import PageMeta from '@/components/common/PageMeta';
import ProfileHeader from '@/components/home/ProfileHeader';
import InfoSection from '@/components/home/InfoSection';
import ContactSection from '@/components/home/ContactSection';
import DigitalTwinChat from '@/components/home/DigitalTwinChat';

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="江宇梦 · 个人主页"
        description="一个正在用AI学习做产品的研二学生"
      />
      <div className="paper-texture relative min-h-screen w-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-accent/3" />
        </div>

        <main className="relative mx-auto w-full max-w-2xl px-5 py-12 sm:py-16 md:py-20">
          <div className="space-y-12 sm:space-y-14">
            {/* 首屏：个人信息 */}
            <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
              <ProfileHeader />
            </div>

            {/* 第二屏：信息卡片 */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}
            >
              <InfoSection />
            </div>

            {/* 第三屏：数字分身聊天 */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
            >
              <div id="twin-chat">
                <DigitalTwinChat />
              </div>
            </div>

            {/* 第四屏：联系方式 */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: '450ms', animationFillMode: 'backwards' }}
            >
              <ContactSection />
            </div>
          </div>

          <footer className="mt-16 text-center">
            <p className="text-xs text-muted-foreground/50 font-mono">
              Built with React + Vite
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
