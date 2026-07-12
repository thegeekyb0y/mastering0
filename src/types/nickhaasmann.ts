export type Testimonial = {
  name: string;
  role: string;
  duration?: string;
  image: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  variant: "bolt" | "calendar" | "sleep" | "chat" | "fitness" | "metric";
};

export type Pillar = {
  eyebrow: string;
  title: string;
  description: string;
};
