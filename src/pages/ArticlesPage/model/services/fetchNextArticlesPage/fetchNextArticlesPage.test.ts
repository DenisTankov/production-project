import { ArticleSortField, ArticleView } from "entities/Article";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
   test("success", async () => {
      const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
         articlesPage: {
            _inited: true,
            view: ArticleView.BIG,
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
            order: "asc",
            sort: ArticleSortField.CREATED,
            search: "",
         },
      });

      await thunk.callThunk();

      expect(thunk.dispatch).toBeCalledTimes(4);
      expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
   });
   test("fetchAritcleList not called", async () => {
      const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
         articlesPage: {
            _inited: true,
            view: ArticleView.BIG,
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: false,
            order: "asc",
            sort: ArticleSortField.CREATED,
            search: "",
         },
      });

      await thunk.callThunk();

      expect(thunk.dispatch).toBeCalledTimes(2);
      expect(fetchArticlesList).not.toHaveBeenCalled();
   });
});
