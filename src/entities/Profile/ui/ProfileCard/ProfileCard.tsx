import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";
import { Currency } from "entities/Currency";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect/CurrencySelect";
import { useTranslation } from "react-i18next";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";
import { HStack, VStack } from "shared/ui/Stack";

interface ProfileCardProps {
   className?: string;
   data?: Profile;
   isLoading?: boolean;
   error?: string;
   readonly?: boolean;
   onChangeFirstname?: (value?: string) => void;
   onChangeLastname?: (value?: string) => void;
   onChangeAge?: (value?: string) => void;
   onChangeCity?: (value?: string) => void;
   onChangeUsername?: (value?: string) => void;
   onChangeAvatar?: (value?: string) => void;
   onChangeCurrency?: (currency: Currency) => void;
   onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
   const {
      className,
      data,
      isLoading,
      error,
      onChangeFirstname,
      onChangeLastname,
      readonly,
      onChangeAge,
      onChangeCity,
      onChangeUsername,
      onChangeAvatar,
      onChangeCurrency,
      onChangeCountry,
   } = props;

   const { t } = useTranslation("profile");

   if (isLoading) {
      return (
         <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
         >
            <Loader />
         </HStack>
      );
   }

   if (error) {
      return (
         <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [className, cls.error])}
         >
            <Text
               theme={TextTheme.ERROR}
               title={t("Произошла ошибка при загрузке профиля")}
               text={t("Попробуйте обновить страницу")}
               align={TextAlign.CENTER}
            />
         </HStack>
      );
   }

   const mods: Mods = {
      [cls.editing]: !readonly,
   };

   return (
      <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
         {data?.avatar && (
            <HStack justify="center" max className={cls.avatarWrapper}>
               <Avatar src={data?.avatar} />
            </HStack>
         )}
         <Input
            value={data?.first}
            placeholder={t("Ваше имя")}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
         />
         <Input
            value={data?.lastname}
            placeholder={t("Ваша фамилия")}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
         />
         <Input
            value={data?.age}
            placeholder={t("Ваш возраст")}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            onKeyPress={(event) => {
               if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
               }
            }}
         />
         <Input
            value={data?.city}
            placeholder={t("Ваш город")}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
         />
         <Input
            value={data?.username}
            placeholder={t("Введите имя пользователя")}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
         />
         <Input
            value={data?.avatar}
            placeholder={t("Введите ссылку на ваш аватар")}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
         />
         <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
         />
         <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
         />
      </VStack>
   );
};
