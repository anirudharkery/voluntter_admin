// src/components/ui/button.jsx
import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#811E2D] text-white hover:bg-[#9B2435]": variant === "default",
            "bg-transparent text-[#811E2D] hover:bg-gray-100":
              variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 px-3": size === "sm",
            "h-10 px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
