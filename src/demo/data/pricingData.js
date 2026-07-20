// Paid plans aligned with 积分系统.docx (TABLE 2)
import { templates } from "./templatesList";

const templateCountLabel = `${templates.length}+`;

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    badgeColor: null,
    positioning: "For creators getting started with AI generation",
    price: { monthly: 14, yearly: 12, yearlyTotal: 144 },
    credits: "4,500 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "neutral",
    features: [
      "4,500 fast generation points / month",
      "2 parallel tasks",
      "No-watermark outputs",
      "Text & image to video",
      `${templateCountLabel} templates & effects`,
    ],
    bottomNote: "Great for solo creators testing paid workflows",
  },
  {
    id: "basic",
    name: "Basic",
    badge: null,
    badgeColor: null,
    positioning: "For consistent weekly publishing",
    price: { monthly: 29, yearly: 22, yearlyTotal: 264 },
    credits: "9,500 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "neutral",
    features: [
      "9,500 fast generation points / month",
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
    price: { monthly: 75, yearly: 55, yearlyTotal: 660, originalMonthly: 75 },
    credits: "25,000 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "purple",
    features: [
      "25,000 fast generation points / month",
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
    price: { monthly: 120, yearly: 85, yearlyTotal: 1020, originalMonthly: 120 },
    credits: "40,000 credits / month",
    buttonText: "Buy Now",
    buttonVariant: "orange",
    features: [
      "40,000 fast generation points / month",
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
    answer: "Credits are consumed based on actual model API cost ($1 cost = 1,000 credits). Different models, durations, and resolutions use different amounts.",
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
      { name: "Monthly Credits", starter: "4,500", basic: "9,500", pro: "25,000", ultimate: "40,000" },
      { name: "Parallel Tasks", starter: "2", basic: "3", pro: "4", ultimate: "6" },
      { name: "Watermark", starter: "None", basic: "None", pro: "None", ultimate: "None" },
    ],
  },
];

export const CREDIT_RULES = [
  { title: "Image Generation", cost: "$0.01–$0.128 per image (10–130 credits)", description: "Varies by model; see pricing docs" },
  { title: "Video Generation", cost: "Based on model, duration & resolution", description: "$1 API cost = 1,000 credits" },
  { title: "Failed generation", cost: "No charge", description: "Credits are refunded automatically on failure" },
];

export const TOP_UP_PACKS = [];
