import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
   const { className, articles, isLoading, view = ArticleView.SMALL } = props;
   const { t } = useTranslation();

   const renderArticle = (article: Article) => { 
      return <ArticleListItem article={article} view={view} />;
   };

   return (
      <div className={classNames(cls.articleList, {}, [className])}>
         {articles.length > 0 ? articles.map(renderArticle) : null}
      </div>
   );
});