import clsx from 'clsx';
import type { UseComboboxProps, UseComboboxReturnValue } from 'downshift';
import { useCombobox } from 'downshift';
import { useId } from 'react';

type ComboboxItem = {
  name: string;
  value: string;
};

interface ComboboxProps<T extends ComboboxItem> extends UseComboboxProps<T> {
  renderItem?: (
    cb: UseComboboxReturnValue<T>
  ) => (item: T, index: number) => JSX.Element;
}

const defaultRenderItem = <T extends ComboboxItem>(
  cb: UseComboboxReturnValue<T>
) => {
  return function renderItem(item: T, index: number) {
    return (
      <li
        className={clsx('flex cursor-pointer items-center gap-2 py-1 px-2', {
          'bg-primary': cb.highlightedIndex === index,
        })}
        key={item.value}
        {...cb.getItemProps({ item, index })}
      >
        {item.name}
      </li>
    );
  };
};

export function Combobox<T extends ComboboxItem>({
  renderItem = defaultRenderItem,
  ...comboboxProps
}: ComboboxProps<T>) {
  const id = useId();
  const combobox = useCombobox<T>({
    id,
    ...comboboxProps,
  });
  const { items, selectedItem } = comboboxProps;
  const shouldShowMenu = combobox.isOpen && items.length > 0;
  const renderFn = renderItem(combobox);

  return (
    <div className="relative">
      <input name="value" type="hidden" value={selectedItem?.value ?? ''} />
      <div className="relative">
        <input
          {...combobox.getInputProps({
            className: clsx('input w-full'),
          })}
        />
      </div>
      <ul
        {...combobox.getMenuProps({
          className: clsx(
            'menu menu-horizontal absolute z-10x max-h-[180px] overflow-scroll w-full',
            { hidden: !shouldShowMenu }
          ),
        })}
      >
        {shouldShowMenu ? items.map(renderFn) : null}
      </ul>
    </div>
  );
}
