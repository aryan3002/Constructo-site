/** Format a number as Indian-grouped rupees: 120000 -> "₹1,20,000" */
export function inr(amount: number): string {
  return "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount)
}
