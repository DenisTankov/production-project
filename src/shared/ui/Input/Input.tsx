import React, { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
   InputHTMLAttributes<HTMLInputElement>,
   "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
   className?: string;
   value?: string | number;
   onChange?: (value: string) => void;
   autofocus?: boolean;
   readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = "text",
      placeholder,
      autofocus,
      readonly,
      ...otherProps
   } = props;

   const ref = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (autofocus) {
         ref.current?.focus();
      }
   }, [autofocus]);

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   const mods: Mods = {
      [cls.readonly]: readonly,
   };

   return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
         {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
         <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            readOnly={readonly}
            pattern="^\+7[1-9]{10}$"
            {...otherProps}
         />
      </div>
   );
});
