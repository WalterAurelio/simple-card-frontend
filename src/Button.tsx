import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-green-400',
      secondary: 'bg-red-400',
    },
    state: {
      disabled: 'text-blue-500',
      enabled: 'text-amber-600'
    }
  },
  defaultVariants: {
    variant: 'secondary',
    state: 'disabled'
  }
});

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;

}

function Button({ className, children, variant, state, ...props }: MyButtonProps) {
  const aux = 2 + 2;

  return (
    <button className={twMerge(
      clsx(buttonVariants({ variant, state, className }), 'text-4xl', {
        'opacity-50': aux === 4,
        'opacity-0': aux === 8
      })
    )} {...props}>
      {children}
    </button>
  )
}
export default Button