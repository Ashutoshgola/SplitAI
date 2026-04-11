import { v } from "convex/valuesiz";
import { action } from "./_generated/server";
import { Resend } from "resend";

// Action to send email using Resend
export const sendEmail = action({
  args: {
    to: v.string(),
    subject: v.string(),
    html: v.string(),
    text: v.optional(v.string()),
    apiKey: v.string(),
  },
  handler: async (ctx, args) => {
    const key = args.apiKey || process.env.RESEND_API_KEY;

if (!key) {
  console.log("Skipping email (no API key during build)");
  return { success: true, skipped: true };
}

const resend = new Resend(key);

    try {
      const result = await resend.emails.send({
        from: "Splitr <onboarding@resend.dev>",
        to: args.to,
        subject: args.subject,
        html: args.html,
        text: args.text,
      });

      console.log("Email sent successfully:", result);

      return { success: true, id: result.id };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: error.message };
    }
  },
});
