export const CONFIG_SITE = "https://nicholasgillespie.github.io";
export const CONFIG_BASE: string =
  process.env.NODE_ENV === "production" ? "/designo" : "";

export const SITE_TITLE = "Designo Creative Agency";
export const SITE_NAVIGATION = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

export const SOCIAL_MEDIA = [
  { label: "GitHub", url: "https://github.com/nicholasgillespie" },
  { label: "Twitter", url: "https://x.com/nikogillespie" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/gillespie-nicholas" },
];
