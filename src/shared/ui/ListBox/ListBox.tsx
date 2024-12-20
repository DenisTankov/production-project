import { Listbox as HListbox } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import cls from "./ListBox.module.scss";
import { HStack } from "../Stack";
import { DropdownDirection } from "shared/types/ui";

export interface ListBoxItem {
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

interface ListBoxProps {
   items?: ListBoxItem[];
   className?: string;
   value?: string;
   defaultValue?: string;
   onChange: (value: string) => void;
   readonly?: boolean;
   direction?: DropdownDirection;
   label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
   "bottom left": cls.optionsBottomLeft,
   "bottom right": cls.optionsBottomRight,
   "top left": cls.optionsTopLeft,
   "top right": cls.optionsTopRight,
};

export function Listbox(props: ListBoxProps) {
   const {
      className,
      items,
      value,
      defaultValue,
      onChange,
      readonly,
      direction = "bottom right",
      label,
   } = props;

   const optionsClasses = [mapDirectionClass[direction]];

   return (
      <HStack gap="4">
         {label && <span>{label + ">"}</span>}
         <HListbox
            disabled={readonly}
            as="div"
            className={classNames(cls.listBox, {}, [className])}
            value={value}
            onChange={onChange}
         >
            <HListbox.Button className={cls.trigger}>
               <Button disabled={readonly}>{value ?? defaultValue}</Button>
            </HListbox.Button>
            <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
               {items?.map((item) => (
                  <HListbox.Option
                     key={item.value}
                     value={item.value}
                     disabled={item.disabled}
                     as={Fragment}
                  >
                     {({ active, selected }) => (
                        <li
                           className={classNames(cls.item, {
                              [cls.active]: active,
                              [cls.disabled]: item.disabled,
                           })}
                        >
                           {item.content}
                        </li>
                     )}
                  </HListbox.Option>
               ))}
            </HListbox.Options>
         </HListbox>
      </HStack>
   );
}
