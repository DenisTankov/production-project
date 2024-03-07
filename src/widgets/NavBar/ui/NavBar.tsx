import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

interface NavbarProps {
   className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);

   const onToggleModal = useCallback(() => {
      setIsAuthModal((prev) => !prev);
   }, []);

   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <Button theme={ThemeButton.CLEAR_INVERTED} className={classNames(cls.links)} onClick={onToggleModal}>
            {t("Войти")}
         </Button>
         <Modal isOpen={isAuthModal} onClose={onToggleModal}>
            {"dfjdfk"}
         </Modal>
      </div>
   );
};
