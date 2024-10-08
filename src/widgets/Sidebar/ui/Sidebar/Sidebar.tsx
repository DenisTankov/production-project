import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { VStack } from "shared/ui/Stack/VStack/VStack";

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
   const { t } = useTranslation();

   const [collapsed, setCollapsed] = useState(false);
   const sidebarItemsList = useSelector(getSidebarItems);

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   const itemsList = useMemo(() => {
      return sidebarItemsList.map((item) => (
         <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      ));
   }, [collapsed, sidebarItemsList]);

   return (
      <aside
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
         <VStack gap="8" className={cls.items}>
            {itemsList}
         </VStack>
         <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
         </div>
      </aside>
   );
});
