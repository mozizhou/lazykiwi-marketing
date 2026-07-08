// Paid plans aligned with backend Stripe catalog (starter/basic/pro/ultimate)

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    badgeColor: null,
    positioning: "For creators getting started with AI generation",
    price: { monthly: 14, yearly: 12, yearlyTotal: 144 },
    credits: "2,000 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "neutral",
    features: [
      "2,000 fast generation points / month",
      "2 parallel tasks",
      "No-watermark outputs",
      "Text & image to video",
      "300+ templates & effects",
    ],
    bottomNote: "Great for solo creators testing paid workflows",
  },
  {
    id: "basic",
    name: "Basic",
    badge: null,
    badgeColor: null,
    positioning: "For consistent weekly publishing",
    price: { monthly: 29, yearly: 17, yearlyTotal: 204 },
    credits: "6,500 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "neutral",
    features: [
      "6,500 fast generation points / month",
      "3 parallel tasks",
      "No-watermark outputs",
      "All Starter features",
      "Faster generation speed",
    ],
    bottomNote: "Best for creators posting several times a week",
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Most Popular",
    badgeColor: "purple",
    accentColor: "purple",
    positioning: "For daily creators and paid campaigns",
    price: { monthly: 75, yearly: 39, yearlyTotal: 468, originalMonthly: 90 },
    credits: "18,000 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "purple",
    features: [
      "18,000 fast generation points / month",
      "4 parallel tasks",
      "Priority queue",
      "Private visibility",
      "All Basic features",
    ],
    bottomNote: "Early access to new models",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    badge: "Best Value",
    badgeColor: "orange",
    accentColor: "orange",
    positioning: "For studios and high-volume teams",
    price: { monthly: 120, yearly: 75, yearlyTotal: 900, originalMonthly: 149 },
    credits: "27,000 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "orange",
    features: [
      "27,000 fast generation points / month",
      "6 parallel tasks",
      "Ultra-fast generation",
      "Priority support",
      "All Pro features",
    ],
    bottomNote: "Lowest cost per credit",
  },
];

export const PRICING_FAQS = [
  {
    question: "What are credits and how are they used?",
    answer: "Credits are used to generate AI videos and images. Different models consume different amounts.",
  },
  {
    question: "Do unused credits roll over?",
    answer: "No. Your balance refreshes to your plan allotment at the start of each billing period.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You keep access until the end of the current billing period.",
  },
];

export const COMPARISON_FEATURES = [
  {
    category: "Generation Limits",
    features: [
      { name: "Monthly Credits", starter: "2,000", basic: "6,500", pro: "18,000", ultimate: "27,000" },
      { name: "Parallel Tasks", starter: "2", basic: "3", pro: "4", ultimate: "6" },
      { name: "Watermark", starter: "None", basic: "None", pro: "None", ultimate: "None" },
    ],
  },
];

export const CREDIT_RULES = [
  { title: "Image Generation", cost: "1 image = 1 credit", description: "Simple and transparent pricing" },
  { title: "Video Generation", cost: "1 basic video = 10 credits", description: "4-second basic video generation" },
  { title: "Regeneration", cost: "1 regenerate = 5 credits", description: "Quick regeneration option" },
];

export const TOP_UP_PACKS = [
  { credits: 500, price: 18, description: "Light top-up", isPopular: false },
  { credits: 1200, price: 36, description: "Common top-up", isPopular: true },
  { credits: 3000, price: 75, description: "High-frequency top-up", isPopular: false },
];
