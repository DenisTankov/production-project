import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import { classNames } from "shared/lib/classNames/classNames";
import {
   DynamicModuleLoader,
   ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import {
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleDetails.module.scss";

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
   const isLoading = useSelector(getArticleDetailsIsLoading);
   const error = useSelector(getArticleDetailsError);

   const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
         case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
         case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;
         case ArticleBlockType.IMAGE:
            return (
               <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />
            );

         default:
            return null;
      }
   }, []);

   useEffect(() => {
      if (__PROJECT__ !== "storybook") {
         dispatch(fetchArticleById(id));
      }
   }, [dispatch, id]);

   let content;

   if (isLoading) {
      content = (
         <>
            <Skeleton className={cls.avatar} height={200} width={200} border={"50%"} />
            <Skeleton className={cls.title} height={32} width={300} />
            <Skeleton className={cls.skeleton} height={24} width={600} />
            <Skeleton className={cls.skeleton} height={200} width={"100%"} />
            <Skeleton className={cls.skeleton} height={200} width={"100%"} />
         </>
      );
   } else if (error) {
      content = <Text title={t("Произошла ошибка при загрузке статьи")} align={TextAlign.CENTER} />;
   } else {
      content = (
         <>
            <div className={cls.avatarWrapper}>
               <Avatar size={200} src={article?.img} className={cls.avatar} />
            </div>
            <Text
               className={cls.title}
               title={article?.title}
               text={article?.subtitle}
               size={TextSize.L}
            />
            <div className={cls.articleInfo}>
               <Icon className={cls.icon} Svg={EyeIcon} />
               <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
               <Icon className={cls.icon} Svg={CalendarIcon} />
               <Text text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderBlock)}
         </>
      );
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
         <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
      </DynamicModuleLoader>
   );
});
