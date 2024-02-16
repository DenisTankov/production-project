import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";

interface NavbarProps {
   className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <div className={classNames(cls.links)}></div>
      </div>
   );
};
