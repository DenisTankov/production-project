import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
   DynamicModuleLoader,
   ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
   className?: string;
   id: string;
}

const reducers: ReducersList = {
   articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
   const { className, id } = props;
   const { t } = useTranslation("article-details");
   const dispatch = useAppDispatch();
   const article = useSelector(getArticleDetailsData);
   // const isLoading = useSelector(getArticleDetailsIsLoading);
   const isLoading = true;
   const error = useSelector(getArticleDetailsError);

   useEffect(() => {
      dispatch(fetchArticleById(id));
   }, [dispatch, id]);

   let content;

   if (isLoading) {
      content = (
         <div>
            <Skeleton className={cls.avatar} height={200} width={200} border={"50%"} />
            <Skeleton className={cls.title} height={32} width={300} />
            <Skeleton className={cls.skeleton} height={24} width={600} />
            <Skeleton className={cls.skeleton} height={200} width={"100%"} />
            <Skeleton className={cls.skeleton} height={200} width={"100%"} />
         </div>
      );
   } else if (error) {
      content = <Text title={t("Произошла ошибка при загрузке статьи")} align={TextAlign.CENTER} />;
   } else {
      content = <div>ДЕТАЛИ СТАТЬИ</div>;
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
         <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
      </DynamicModuleLoader>
   );
});
