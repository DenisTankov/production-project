import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
   DynamicModuleLoader,
   ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import {
   getArticlesPageError,
   getArticlesPageHasMore,
   getArticlesPageIsLoading,
   getArticlesPageNum,
   getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../model/services/initArticlesPage/initArticlesPage";
import {
   articlesPageActions,
   articlesPageReducer,
   getArticles,
} from "../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
   const { className } = props;
   const { t } = useTranslation("article-details");
   const dispatch = useAppDispatch();
   const articles = useSelector(getArticles.selectAll);
   const isLoading = useSelector(getArticlesPageIsLoading);
   const error = useSelector(getArticlesPageError);
   const view = useSelector(getArticlesPageView);
   const page = useSelector(getArticlesPageNum);
   const hasMore = useSelector(getArticlesPageHasMore);

   const onChangeView = useCallback(
      (view: ArticleView) => {
         dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
   );

   const onLoadNextPart = useCallback(() => {
      dispatch(fetchNextArticlesPage());
   }, [dispatch]);

   useInitialEffect(() => {
      dispatch(initArticlesPage());
   });

   // useEffect(() => {
   //    dispatch(articlesPageActions.initState());
   //    dispatch(fetchArticlesList({ page: 1 }));
   // }, [view]);

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
         <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.articlesPage, {}, [className])}
         >
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList isLoading={isLoading} view={view} articles={articles} />
         </Page>
      </DynamicModuleLoader>
   );
};

export default memo(ArticlesPage);
