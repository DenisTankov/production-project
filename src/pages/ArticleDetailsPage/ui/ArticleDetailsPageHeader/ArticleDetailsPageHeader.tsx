import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { getCanEditArticle } from "../../model/selectors/article";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
   className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const navigate = useNavigate();
   const article = useSelector(getArticleDetailsData);
   const canEdit = useSelector(getCanEditArticle);

   const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
   }, [navigate]);

   const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`);
   }, [navigate, article?.id]);

   return (
      <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
         <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
            {t("Назад к списку")}
         </Button>
         {canEdit && (
            <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle} className={cls.editBtn}>
               {t("Редактировать")}
            </Button>
         )}
      </div>
   );
});
