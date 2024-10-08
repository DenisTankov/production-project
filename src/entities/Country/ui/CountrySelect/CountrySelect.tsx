import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Listbox } from "shared/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
   className?: string;
   value?: Country;
   onChange?: (value: Country) => void;
   readonly?: boolean;
}

const options = [
   { value: Country.Russia, content: Country.Russia },
   { value: Country.Belarus, content: Country.Belarus },
   { value: Country.Ukraine, content: Country.Ukraine },
   { value: Country.Kazakhstan, content: Country.Kazakhstan },
   { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
   const { className, value, onChange, readonly } = props;
   const { t } = useTranslation("profile");

   const onChangeHandler = useCallback(
      (value: string) => {
         onChange?.(value as Country);
      },
      [onChange]
   );

   return (
      <Listbox
         className={className}
         onChange={onChangeHandler}
         value={value}
         items={options}
         defaultValue={t("Укажите страну")}
         label={t("Укажите страну")}
         readonly={readonly}
         direction="top right"
      />
   );
});
