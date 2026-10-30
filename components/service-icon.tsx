import { Bot, Code2, Layers3, LifeBuoy, Palette, Smartphone } from "lucide-react";

const icons = {
  web: Code2,
  mobile: Smartphone,
  software: Layers3,
  design: Palette,
  ai: Bot,
  support: LifeBuoy,
};

export function ServiceIcon({ name, size = 24 }: { name: keyof typeof icons; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}
