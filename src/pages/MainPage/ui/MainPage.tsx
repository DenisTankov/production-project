import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
   const { t } = useTranslation();
   const [value, setValue] = useState("");

   const onChange = (val: string) => {
      setValue(val);
   };
   return (
      <div>
         <div>{t("Главная страница")}</div>
      </div>
   );
};

export default MainPage;
