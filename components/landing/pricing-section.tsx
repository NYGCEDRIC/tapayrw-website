"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
  
};
const demoPrices = [
  {
    id: "price_1",
    name: "Basic",
    description: "Perfect for small schools or canteens starting with NFC payments",
    features: [
      "NFC card management",
      "Real-time transaction tracking",
      "Basic analytics and reporting",
      "Support for up to 500 users",
      "POS application (terminal not included)",
    ],
    monthlyPrice: 500000, // RWF 5,000 per month (15,000/3)
    yearlyPrice: 5400000, // Yearly: 60,000 - 10% = 54,000
    monthlyPriceUSD: 4, // $4 (5,000 RWF ≈ $4)
    yearlyPriceUSD: 43.2, // Yearly with 10% discount
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Standard",
    description: "Suitable for medium-sized schools or businesses",
    features: [
      "Everything in Basic",
      "Advanced analytics and custom reports",
      "User limit increased to 2000",
      "Priority support",
      "1 FREE POS terminal included",
      "Additional terminals available for purchase",
    ],
    monthlyPrice: 350000, // RWF 3,500 per month (rounded from 3,333)
    yearlyPrice: 3780000, // Yearly: 42,000 - 10% = 37,800
    monthlyPriceUSD: 2.8, // $2.80 (3,500 RWF ≈ $2.80)
    yearlyPriceUSD: 30.24, // Yearly with 10% discount
    isMostPopular: true,
  },
  {
    id: "price_3",
    name: "Premium",
    description: "Ideal for larger institutions or enterprises",
    features: [
      "Everything in Standard",
      "Unlimited users",
      "Dedicated admin panel customization",
      "Full inventory management system",
      "API integrations for invoicing",
      "24/7 customer support",
      "1 FREE POS terminal included",
      "Additional terminals at discounted price",
    ],
    monthlyPrice: 300000, // RWF 3,000 per month (rounded from 2,833)
    yearlyPrice: 3240000, // Yearly: 36,000 - 10% = 32,400
    monthlyPriceUSD: 2.4, // $2.40 (3,000 RWF ≈ $2.40)
    yearlyPriceUSD: 25.92, // Yearly with 10% discount
    isMostPopular: false,
  },
  {
    id: "price_4",
    name: "Enterprise",
    description: "Tailored for industry-specific needs and large-scale deployments",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom NFC card integrations",
      "White-labeled solutions",
    ],
    monthlyPrice: 0, // Contact us pricing
    yearlyPrice: 0,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRURTY0OTI2UjJLME45QUNWNDY0UU9XMFA4NC4u', '_blank');
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-2xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h4>

          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple Pricing for Your Business
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose a <strong>plan that scales</strong> with your business. Accept NFC 
            payments seamlessly with hardware included in all annual plans.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            10% OFF + FREE Hardware ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  {price.monthlyPrice === 0 ? (
                    "Contact Us"
                  ) : (
                    <>
                      RWF{" "}
                      {interval === "year"
                        ? toHumanPrice(price.yearlyPrice, 0)
                        : toHumanPrice(price.monthlyPrice, 0)}
                      <span className="text-xs"> / {interval}</span>
                    </>
                  )}
                </span>
                {price.monthlyPriceUSD && (
                  <>
                    <span className="text-sm text-black/70 dark:text-white/70">
                      (USD ${interval === "year"
                        ? price.yearlyPriceUSD
                        : price.monthlyPriceUSD}
                      / {interval})
                    </span>
                    {interval === "year" && (
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Save RWF {toHumanPrice(price.monthlyPrice * 12 - price.yearlyPrice, 0)} per year
                      </span>
                    )}
                  </>
                )}
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
