"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // make sure you have this
import { buttonVariants } from "@/components/ui/button";

export function LayoutButton({ className, variant = "default", size = "default", ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export default LayoutButton;
