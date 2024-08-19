import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
   DynamicModuleLoader,
   ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import {
   getAddCommentFormError,
   getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
   addCommentFormActions,
   addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./addCommentForm.module.scss";

export interface addCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
   addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: addCommentFormProps) => {
   const { className, onSendComment } = props;
   const { t } = useTranslation("article-details");
   const text = useSelector(getAddCommentFormText);
   const error = useSelector(getAddCommentFormError);
   const dispatch = useAppDispatch();

   const onCommentTextChange = useCallback(
      (value: string) => {
         dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
   );

   const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
   }, [onCommentTextChange, onSendComment, text]);

   return (
      <DynamicModuleLoader reducers={reducers}>
         <div className={classNames(cls.addCommentForm, {}, [className])}>
            <Input
               className={cls.input}
               placeholder={t("Введите текст комментария")}
               value={text}
               onChange={onCommentTextChange}
            />
            <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
               {t("Отправить")}
            </Button>
         </div>
      </DynamicModuleLoader>
   );
});

export default AddCommentForm;
