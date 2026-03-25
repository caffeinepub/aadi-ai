import {
  ArrowRight,
  Brain,
  Github,
  Linkedin,
  Mic,
  Monitor,
  RefreshCw,
  Smartphone,
  Tablet,
  Twitter,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// --- Geometric background decorations ---
const SHAPES = [
  {
    type: "circle",
    size: 8,
    top: "8%",
    left: "5%",
    color: "#2FE7D0",
    opacity: 0.3,
    glow: true,
  },
  {
    type: "square",
    size: 10,
    top: "12%",
    left: "18%",
    color: "#45B8FF",
    opacity: 0.25,
    glow: false,
  },
  {
    type: "rect",
    w: 18,
    h: 8,
    top: "6%",
    left: "72%",
    color: "#8B5CF6",
    opacity: 0.3,
    glow: true,
  },
  {
    type: "circle",
    size: 12,
    top: "20%",
    left: "88%",
    color: "#D946EF",
    opacity: 0.22,
    glow: false,
  },
  {
    type: "square",
    size: 7,
    top: "35%",
    left: "3%",
    color: "#2FE7D0",
    opacity: 0.28,
    glow: false,
  },
  {
    type: "circle",
    size: 6,
    top: "42%",
    left: "93%",
    color: "#45B8FF",
    opacity: 0.32,
    glow: true,
  },
  {
    type: "rect",
    w: 14,
    h: 6,
    top: "55%",
    left: "8%",
    color: "#8B5CF6",
    opacity: 0.25,
    glow: false,
  },
  {
    type: "circle",
    size: 9,
    top: "60%",
    left: "85%",
    color: "#2FE7D0",
    opacity: 0.28,
    glow: true,
  },
  {
    type: "square",
    size: 11,
    top: "70%",
    left: "14%",
    color: "#D946EF",
    opacity: 0.2,
    glow: false,
  },
  {
    type: "rect",
    w: 20,
    h: 7,
    top: "75%",
    left: "78%",
    color: "#45B8FF",
    opacity: 0.22,
    glow: false,
  },
  {
    type: "circle",
    size: 7,
    top: "82%",
    left: "50%",
    color: "#8B5CF6",
    opacity: 0.3,
    glow: true,
  },
  {
    type: "square",
    size: 9,
    top: "88%",
    left: "25%",
    color: "#2FE7D0",
    opacity: 0.2,
    glow: false,
  },
  {
    type: "circle",
    size: 6,
    top: "15%",
    left: "45%",
    color: "#D946EF",
    opacity: 0.18,
    glow: false,
  },
  {
    type: "rect",
    w: 12,
    h: 5,
    top: "30%",
    left: "60%",
    color: "#2FE7D0",
    opacity: 0.22,
    glow: true,
  },
  {
    type: "circle",
    size: 10,
    top: "50%",
    left: "32%",
    color: "#45B8FF",
    opacity: 0.18,
    glow: false,
  },
  {
    type: "square",
    size: 8,
    top: "65%",
    left: "96%",
    color: "#8B5CF6",
    opacity: 0.24,
    glow: false,
  },
  {
    type: "rect",
    w: 16,
    h: 6,
    top: "92%",
    left: "62%",
    color: "#D946EF",
    opacity: 0.2,
    glow: true,
  },
];

const PARTICLES = [
  { id: "p1", top: "2%", left: "40%", c: "#2FE7D0", s: 6 },
  { id: "p2", top: "85%", left: "65%", c: "#45B8FF", s: 5 },
  { id: "p3", top: "40%", left: "2%", c: "#8B5CF6", s: 7 },
  { id: "p4", top: "55%", left: "92%", c: "#D946EF", s: 5 },
  { id: "p5", top: "20%", left: "80%", c: "#2FE7D0", s: 4 },
  { id: "p6", top: "75%", left: "12%", c: "#45B8FF", s: 6 },
];

function GeometricBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          left: "60%",
          background:
            "radial-gradient(circle, rgba(47,231,208,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "70%",
          left: "20%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {SHAPES.map((s) => {
        const style: React.CSSProperties = {
          position: "absolute",
          top: s.top,
          left: s.left,
          opacity: s.opacity,
          backgroundColor: s.color,
          boxShadow: s.glow ? `0 0 8px 2px ${s.color}80` : undefined,
        };
        if (s.type === "circle") {
          style.width = s.size;
          style.height = s.size;
          style.borderRadius = "50%";
        } else if (s.type === "square") {
          style.width = s.size;
          style.height = s.size;
          style.borderRadius = 2;
        } else {
          style.width = (s as { w: number }).w;
          style.height = (s as { h: number }).h;
          style.borderRadius = 2;
        }
        return <div key={s.type + s.top + s.left} style={style} />;
      })}
    </div>
  );
}

function AadiLogo({ size = 36 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #2FE7D0 0%, #45B8FF 50%, #8B5CF6 100%)",
        boxShadow: "0 0 16px rgba(47,231,208,0.5)",
      }}
    >
      <span
        className="text-white font-black"
        style={{ fontSize: size * 0.45, lineHeight: 1 }}
      >
        A
      </span>
    </div>
  );
}

function HeroLogo() {
  return (
    <div
      className="relative flex items-center justify-center float-anim"
      style={{ width: 340, height: 340 }}
    >
      <div
        className="absolute orbit-ring orbit-ring-3"
        style={{ width: 320, height: 320 }}
      >
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: "10%",
            left: "50%",
            background: "#45B8FF",
            boxShadow: "0 0 8px #45B8FF",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            bottom: "15%",
            right: "20%",
            background: "#2FE7D0",
            boxShadow: "0 0 6px #2FE7D0",
          }}
        />
      </div>
      <div
        className="absolute orbit-ring orbit-ring-2"
        style={{ width: 230, height: 230 }}
      >
        <div
          className="absolute w-2.5 h-2.5 rounded-sm"
          style={{
            top: "5%",
            right: "25%",
            background: "#8B5CF6",
            boxShadow: "0 0 8px #8B5CF6",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            bottom: "10%",
            left: "15%",
            background: "#D946EF",
            boxShadow: "0 0 6px #D946EF",
          }}
        />
      </div>
      <div className="absolute orbit-ring" style={{ width: 150, height: 150 }}>
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: "8%",
            left: "30%",
            background: "#2FE7D0",
            boxShadow: "0 0 6px #2FE7D0",
          }}
        />
      </div>
      <div
        className="relative z-10 flex items-center justify-center rounded-2xl"
        style={{
          width: 90,
          height: 90,
          background:
            "linear-gradient(135deg, #2FE7D0 0%, #45B8FF 40%, #8B5CF6 100%)",
          boxShadow:
            "0 0 40px rgba(47,231,208,0.5), 0 0 80px rgba(139,92,246,0.3)",
        }}
      >
        <span className="text-white font-black text-4xl">A</span>
      </div>
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute pulse-glow rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.s,
            height: p.s,
            background: p.c,
            boxShadow: `0 0 6px ${p.c}`,
          }}
        />
      ))}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}22`, border: `1px solid ${color}44` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function DeviceMockup({ device }: { device: "laptop" | "phone" | "tablet" }) {
  const content = (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: "#0B0F14", borderRadius: 4 }}
    >
      <div
        className="flex items-center gap-1.5 p-2"
        style={{ borderBottom: "1px solid #263040" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "#2FE7D0" }}
        />
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "#45B8FF" }}
        />
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "#8B5CF6" }}
        />
        <span className="text-xs ml-2" style={{ color: "#A7B0BE" }}>
          Aadi-ai
        </span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #2FE7D0, #8B5CF6)" }}
        >
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <p className="text-xs font-medium" style={{ color: "#F3F6FA" }}>
          How can I help?
        </p>
        <div
          className="w-full rounded-lg p-2 text-xs"
          style={{
            background: "#141A22",
            border: "1px solid #263040",
            color: "#A7B0BE",
          }}
        >
          Ask me anything...
        </div>
      </div>
    </div>
  );

  if (device === "laptop") {
    return (
      <div className="flex flex-col items-center">
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            width: 320,
            height: 200,
            background: "#1a2030",
            border: "2px solid #263040",
            boxShadow: "0 0 40px rgba(47,231,208,0.15)",
          }}
        >
          {content}
        </div>
        <div
          className="rounded-b-xl"
          style={{
            width: 360,
            height: 14,
            background: "#141A22",
            border: "1px solid #263040",
            marginTop: -1,
          }}
        />
        <div
          className="rounded-b-xl"
          style={{
            width: 120,
            height: 8,
            background: "#0d1117",
            border: "1px solid #263040",
          }}
        />
      </div>
    );
  }
  if (device === "phone") {
    return (
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          width: 140,
          height: 260,
          background: "#1a2030",
          border: "2px solid #263040",
          boxShadow: "0 0 40px rgba(139,92,246,0.2)",
        }}
      >
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 40, height: 5, background: "#263040" }}
        />
        <div className="mt-8 h-full">{content}</div>
      </div>
    );
  }
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        width: 240,
        height: 200,
        background: "#1a2030",
        border: "2px solid #263040",
        boxShadow: "0 0 40px rgba(69,184,255,0.15)",
      }}
    >
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full"
        style={{ width: 6, height: 6, background: "#263040" }}
      />
      <div className="mt-5 h-full">{content}</div>
    </div>
  );
}

function Navbar({
  activeTab,
  onTabChange,
}: { activeTab: string; onTabChange: (t: string) => void }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(20px)",
        background: "rgba(7,10,15,0.85)",
        borderBottom: "1px solid rgba(38,48,64,0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <AadiLogo size={34} />
          <span className="font-bold text-lg text-foreground tracking-tight">
            Aadi-ai
          </span>
        </div>

        <div
          className="flex items-center rounded-full p-1 gap-1"
          style={{ background: "#151B23", border: "1px solid #263040" }}
        >
          {["Aadi-ai", "Devices"].map((tab) => (
            <button
              key={tab}
              type="button"
              data-ocid={`nav.${tab.toLowerCase().replace("-", "")}.tab`}
              onClick={() => onTabChange(tab)}
              className="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background:
                  activeTab === tab ? "rgba(47,231,208,0.15)" : "transparent",
                color: activeTab === tab ? "#2FE7D0" : "#A7B0BE",
                border:
                  activeTab === tab
                    ? "1px solid rgba(47,231,208,0.3)"
                    : "1px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {["Features", "Use Cases", "Developers", "Blog"].map((link) => (
            <button
              key={link}
              type="button"
              data-ocid={`nav.${link.toLowerCase().replace(" ", "")}.link`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
          <button
            type="button"
            data-ocid="nav.try_aadi.button"
            className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200"
          >
            Try Aadi
          </button>
        </nav>
      </div>
    </header>
  );
}

function AadiSection() {
  const chips = [
    "Write a story",
    "Explain quantum computing",
    "Plan my day",
    "Generate code",
  ];
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(47,231,208,0.1)",
                border: "1px solid rgba(47,231,208,0.25)",
                color: "#2FE7D0",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Next Generation AI Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Meet <span className="gradient-text">Aadi-ai</span>
              <br />
              <span
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: "#A7B0BE" }}
              >
                Your intelligence,
              </span>
              <br />
              <span className="gradient-text-alt text-4xl lg:text-5xl font-bold">
                redefined.
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Aadi-ai is a next-generation AI assistant that adapts to your
              needs, learns your preferences, and helps you accomplish more —
              faster than ever.
            </p>

            <div
              className="flex items-center gap-3 rounded-2xl px-5 py-3.5"
              style={{ background: "#141A22", border: "1px solid #263040" }}
              data-ocid="hero.input"
            >
              <input
                type="text"
                placeholder="How can I help you today?"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                data-ocid="hero.search_input"
              />
              <button
                type="button"
                className="p-1.5 rounded-lg transition-colors hover:bg-white/5"
                data-ocid="hero.mic.button"
              >
                <Mic size={18} style={{ color: "#A7B0BE" }} />
              </button>
              <button
                type="button"
                className="btn-gradient p-2 rounded-xl transition-all duration-200"
                data-ocid="hero.send.button"
              >
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  data-ocid="hero.chip.button"
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(69,184,255,0.08)",
                    border: "1px solid rgba(69,184,255,0.2)",
                    color: "#45B8FF",
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <HeroLogo />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-6 mt-24"
        >
          <FeatureCard
            icon={Brain}
            title="Next-Gen AI"
            description="Powered by state-of-the-art language models that understand context deeply and reason with precision."
            color="#2FE7D0"
          />
          <FeatureCard
            icon={RefreshCw}
            title="Seamless Sync"
            description="Your conversations and data sync instantly across all your devices. Pick up right where you left off."
            color="#45B8FF"
          />
          <FeatureCard
            icon={Zap}
            title="Productivity Redefined"
            description="From writing to coding to research, Aadi-ai amplifies your productivity by 10x with intelligent automation."
            color="#8B5CF6"
          />
        </motion.div>
      </div>
    </section>
  );
}

function DevicesSection() {
  const [deviceTab, setDeviceTab] = useState<"Laptop" | "Phone" | "Tablet">(
    "Laptop",
  );

  const deviceInfo = {
    Laptop: {
      icon: Monitor,
      title: "Powerful on Desktop",
      desc: "Get the full Aadi-ai experience on your laptop or desktop. Multi-tab conversations, rich file support, and seamless workflow integration.",
    },
    Phone: {
      icon: Smartphone,
      title: "Always in Your Pocket",
      desc: "Take Aadi-ai wherever you go. Optimized for mobile with voice input, quick responses, and offline mode for on-the-go productivity.",
    },
    Tablet: {
      icon: Tablet,
      title: "Perfect for Tablets",
      desc: "Enjoy a spacious interface ideal for reading, writing, and creative work. Split-screen support makes multitasking effortless.",
    },
  };

  const current = deviceInfo[deviceTab];
  const DeviceIcon = current.icon;

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex flex-col gap-8">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: "#8B5CF6",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Cross-Platform
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Available on all your{" "}
                <span className="gradient-text">devices</span>
              </h2>
            </div>

            <div
              className="inline-flex items-center rounded-full p-1 gap-1"
              style={{
                background: "#151B23",
                border: "1px solid #263040",
                width: "fit-content",
              }}
            >
              {(["Laptop", "Phone", "Tablet"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  data-ocid={`devices.${d.toLowerCase()}.tab`}
                  onClick={() => setDeviceTab(d)}
                  className="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    background:
                      deviceTab === d ? "rgba(139,92,246,0.15)" : "transparent",
                    color: deviceTab === d ? "#8B5CF6" : "#A7B0BE",
                    border:
                      deviceTab === d
                        ? "1px solid rgba(139,92,246,0.3)"
                        : "1px solid transparent",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={deviceTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.3)",
                    }}
                  >
                    <DeviceIcon size={22} style={{ color: "#8B5CF6" }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {current.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {current.desc}
                </p>
                <button
                  type="button"
                  data-ocid="devices.download.button"
                  className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold text-white w-fit transition-all duration-200"
                >
                  Download for {deviceTab}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={deviceTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <DeviceMockup
                  device={
                    deviceTab.toLowerCase() as "laptop" | "phone" | "tablet"
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t px-6 py-16" style={{ borderColor: "#263040" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <AadiLogo size={32} />
              <span className="font-bold text-lg text-foreground">Aadi-ai</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Intelligence for everyone. The future of AI, made accessible,
              powerful, and personal.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://twitter.com"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`footer.${label.toLowerCase()}.button`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#141A22", border: "1px solid #263040" }}
                >
                  <Icon size={16} style={{ color: "#A7B0BE" }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["Product", "Resources", "Legal"].map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              About Us
            </h4>
            <ul className="flex flex-col gap-3">
              {["Team", "Contact"].map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "#263040" }}
        >
          <p className="text-sm text-muted-foreground">
            © {year} Aadi-ai. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              style={{ color: "#2FE7D0" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Aadi-ai");

  return (
    <div className="min-h-screen relative">
      <GeometricBackground />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <AnimatePresence mode="wait">
          {activeTab === "Aadi-ai" ? (
            <motion.div
              key="aadi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AadiSection />
            </motion.div>
          ) : (
            <motion.div
              key="devices"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DevicesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
