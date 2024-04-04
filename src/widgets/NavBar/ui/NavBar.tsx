import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
   className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
   }, []);

   const onShowModal = useCallback(() => {
      setIsAuthModal(true);
   }, []);

   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <Button theme={ThemeButton.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onShowModal}>
            {t("Войти")}
         </Button>
         <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
   );
};
