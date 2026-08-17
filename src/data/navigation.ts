export type NavItem = {
  label: string;
  to: string;
  hash?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Product", to: "/", hash: "product" },
  { label: "How It Works", to: "/", hash: "how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "About", to: "/about" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Product", to: "/", hash: "product" },
      { label: "How It Works", to: "/", hash: "how-it-works" },
      { label: "About", to: "/about" },
      { label: "FAQ", to: "/faq" },
      { label: "Support", to: "/support" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Delete Account", to: "/support/delete-account" },
      { label: "Cookies", to: "/cookies" },
      { label: "Licenses", to: "/licenses" },
    ],
  },
];
