import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./NavBar.module.scss";

interface NavbarProps {
   className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <ThemeSwitcher />
         <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
               Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
               О сайте
            </AppLink>
         </div>
      </div>
   );
};
