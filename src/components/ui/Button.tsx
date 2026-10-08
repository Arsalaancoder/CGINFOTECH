import * as React from "react"
import { Link } from "react-router-dom"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98] group",
  {
    variants: {
      variant: {
        default: "bg-[#143D34] text-white hover:bg-[#0B2B25] shadow-md shadow-[#143D34]/15 border border-transparent",
        primary: "bg-[#143D34] text-white hover:bg-[#0B2B25] shadow-md shadow-[#143D34]/15 border border-transparent",
        secondary: "bg-[#EBF2EF] text-[#143D34] hover:bg-[#9FC3B6]/30 border border-[#397A68]/20",
        dark: "bg-[#0B2B25] text-white hover:bg-[#143D34] border border-white/15 shadow-md",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md",
        outline: "bg-transparent text-[#143D34] hover:bg-[#EBF2EF] border border-[#143D34]/25",
        sage: "bg-[#397A68] text-white hover:bg-[#143D34] font-extrabold shadow-md shadow-[#397A68]/20 border border-transparent",
        ghost: "hover:bg-[#EBF2EF] text-[#143D34]",
        link: "text-[#143D34] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2.5 text-sm gap-2",
        sm: "h-9 rounded-full px-5 py-2 text-xs gap-2",
        md: "h-11 rounded-full px-6 py-3 text-sm gap-2.5",
        lg: "h-12 rounded-full px-8 py-3.5 text-sm sm:text-base gap-3",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to?: string;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, to, showArrow = false, children, ...props }, ref) => {
    if (to) {
      return (
        <motion.div whileHover={{ scale: props.disabled ? 1 : 1.02 }} whileTap={{ scale: props.disabled ? 1 : 0.98 }}>
          <Link
            to={to}
            className={cn(buttonVariants({ variant, size, className }))}
          >
            <span>{children}</span>
            {showArrow && (
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            )}
          </Link>
        </motion.div>
      );
    }

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-1">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
