import type { ReactElement } from 'react';
import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}): ReactElement => (
  <div className={cn('mx-auto max-w-7xl px-4', className)}>
    {children}
  </div>
);

export default Container;
