import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
   const { t } = useTranslation();

   const [collapsed, setCollapsed] = useState(false);

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   const itemsList = useMemo(() => {
      return SidebarItemsList.map((item) => (
         <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      ));
   }, [collapsed]);

   return (
      <div
         data-testid="sidebar"
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
         <Button
            onClick={onToggle}
            className={cls.collapseBtn}
            data-testid="sidebar-toggle"
            theme={ThemeButton.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
         >
            {collapsed ? ">" : "<"}
         </Button>

         <div className={cls.items}>{itemsList}</div>

         <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
         </div>
      </div>
   );
});
