import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
   DynamicModuleLoader,
   ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "shared/ui/Text/Text";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
   articleDetailsCommentsReducer,
   getArticleComments,
} from "../model/slices/ArticleDetailsCommentsSlice";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
   const { className } = props;
   const { t } = useTranslation("article-details");
   const { id } = useParams<{ id: string }>();
   const dispatch = useDispatch();
   const comments = useSelector(getArticleComments.selectAll);
   const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

   const onSendComment = useCallback(
      (text: string) => {
         dispatch(addCommentForArticle(text));
      },
      [dispatch]
   );

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
   });

   if (!id) {
      return (
         <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {t("Статья не найдена")}
         </div>
      );
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t("Комментарии")} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
         </div>
      </DynamicModuleLoader>
   );
};

export default memo(ArticleDetailsPage);