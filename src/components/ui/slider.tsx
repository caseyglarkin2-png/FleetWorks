"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

export function Slider({ className, ...props }: Props) {
  return (
    <SliderPrimitive.Root
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-white/10">
        <SliderPrimitive.Range className="absolute h-full bg-emerald-400/45" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-emerald-400/35 bg-[#0b1120] shadow hover:shadow-emerald-400/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/35" />
    </SliderPrimitive.Root>
  );
}
