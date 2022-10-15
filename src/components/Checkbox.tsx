import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import classNames from 'classnames';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={classNames('w-6', 'h-6', 'p-[2px]', 'bg-gray-800', 'rounded')}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className={classNames('h-5', 'w-5', 'text-cyan-500')}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
