export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { serve } from "inngest/next";

let handler;

if (process.env.NODE_ENV !== "production") {
  const { inngest } = require("@/lib/inngest/client");
  const { paymentReminders } = require("@/lib/inngest/payment-reminders");
  const { spendingInsights } = require("@/lib/inngest/spending-insights");

  handler = serve({
    client: inngest,
    functions: [spendingInsights, paymentReminders],
  });
} else {
  handler = async () => new Response("OK");
}

export { handler as GET, handler as POST, handler as PUT };
