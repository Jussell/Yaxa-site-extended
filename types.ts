export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Brand {
  name: string;
  logo: string; // Placeholder text or image URL
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}