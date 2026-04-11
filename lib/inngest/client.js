import { Inngest } from "inngest";
import { Resend } from "resend";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "splitr",
  name: "Splitr",
});

// Lazy initialization - only created when actually used at runtime
export const getResend = () => new Resend(process.env.RESEND_API_KEY);
