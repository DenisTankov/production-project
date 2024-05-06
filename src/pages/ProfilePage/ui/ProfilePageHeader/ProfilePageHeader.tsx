import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProfileReadonly, profileActions } from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
   className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
   const { t } = useTranslation("profile");
   const readonly = useSelector(getProfileReadonly);
   const dispatch = useAppDispatch();

   const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
   }, [dispatch]);

   const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
   }, [dispatch]);

   const onSave = useCallback(() => {
      dispatch(profileActions.cancelEdit());
   }, [dispatch]);

   return (
      <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
         <Text title={t("Профиль")} />
         {readonly ? (
            <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
               {t("Редактировать")}
            </Button>
         ) : (
            <>
               <Button
                  theme={ThemeButton.OUTLINE_RED}
                  className={cls.editBtn}
                  onClick={onCancelEdit}
               >
                  {t("Отменить")}
               </Button>
               <Button theme={ThemeButton.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                  {t("Сохранить")}
               </Button>
            </>
         )}
      </div>
   );
};
