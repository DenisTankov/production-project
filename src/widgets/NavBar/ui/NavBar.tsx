import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
   className?: string;
}

export const NavBar = memo(({ className }: NavbarProps) => {
   const { t } = useTranslation();
   const [isAuthModal, setIsAuthModal] = useState(false);
   const authData = useSelector(getUserAuthData);
   const dispatch = useDispatch();

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
   }, []);

   const onShowModal = useCallback(() => {
      setIsAuthModal(true);
   }, []);

   const onLogout = useCallback(() => {
      dispatch(userActions.logout());
   }, [dispatch]);

   if (authData) {
      return (
         <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
               theme={ThemeButton.CLEAR_INVERTED}
               className={classNames(cls.links)}
               onClick={onLogout}
            >
               {t("Выйти")}
            </Button>
         </div>
      );
   }

   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <Button
            theme={ThemeButton.CLEAR_INVERTED}
            className={classNames(cls.links)}
            onClick={onShowModal}
         >
            {t("Войти")}
         </Button>
         {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      </div>
   );
});
