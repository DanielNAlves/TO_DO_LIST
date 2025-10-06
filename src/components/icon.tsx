import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={cx(iconVariants({ animate }), className)}
      {...props}
    />
  );
}
