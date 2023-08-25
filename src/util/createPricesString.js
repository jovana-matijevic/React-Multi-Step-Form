export function createPricesString(price, isYearly) {
  return `$${price}/${isYearly ? "yr" : "mo"}`;
}

export function formatPlanPrice(plan, isYearly) {
  if (!plan.yearly || !plan.monthly) return "";
  return createPricesString(isYearly ? plan.yearly : plan.monthly, isYearly);
}
