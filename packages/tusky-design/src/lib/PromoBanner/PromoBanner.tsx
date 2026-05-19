import { clsx } from 'clsx';
import { type HTMLAttributes, type ReactNode } from 'react';

export interface PromoBannerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function PromoBanner({
  children,
  className,
  ...rest
}: PromoBannerProps) {
  return (
    <div
      role="region"
      className={clsx('bg-indigo-600 py-2', className)}
      {...rest}
    >
      <div className="container mx-auto px-4">
        <p className="text-white text-center text-sm">{children}</p>
      </div>
    </div>
  );
}

export default PromoBanner;
