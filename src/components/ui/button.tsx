import type { ButtonHTMLAttributes, Ref } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button-variants';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    ref?: Ref<HTMLButtonElement>;
  };

const Button = ({ asChild = false, className, ref, size, variant, ...props }: Readonly<ButtonProps>) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />;
};

Button.displayName = 'Button';

export { Button };
