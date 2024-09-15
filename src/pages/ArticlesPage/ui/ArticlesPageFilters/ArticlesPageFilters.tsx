import {
   ArticleSortField,
   ArticleSortSelector,
   ArticleView,
   ArticleViewSelector,
} from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import {
   getArticlesPageOrder,
   getArticlesPageSearch,
   getArticlesPageSort,
   getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPageFilters.module.scss";
import { SortOrder } from "shared/types";

interface ArticlesPageFiltersProps {
   className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const view = useSelector(getArticlesPageView);
   const sort = useSelector(getArticlesPageSort);
   const order = useSelector(getArticlesPageOrder);
   const search = useSelector(getArticlesPageSearch);

   const onChangeView = useCallback(
      (view: ArticleView) => {
         dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
   );

   const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
         dispatch(articlesPageActions.setSort(newSort));
         dispatch(articlesPageActions.setPage(1));
      },
      [dispatch]
   );

   const onChangeOrded = useCallback(
      (newOrder: SortOrder) => {
         dispatch(articlesPageActions.setOrder(newOrder));
         dispatch(articlesPageActions.setPage(1));
      },
      [dispatch]
   );

   const onChangeSearch = useCallback(
      (search: string) => {
         dispatch(articlesPageActions.setSearch(search));
         dispatch(articlesPageActions.setPage(1));
      },
      [dispatch]
   );

   return (
      <div className={classNames(cls.articlesPageFilters, {}, [className])}>
         <div className={cls.sortWrapper}>
            <ArticleSortSelector
               order={order}
               sort={sort}
               onChangeOrder={onChangeOrded}
               onChangeSort={onChangeSort}
            />
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
         </div>
         <Card className={cls.search}>
            <Input onChange={onChangeSearch} value={search} placeholder={t("Поиск")} />
         </Card>
      </div>
   );
});
