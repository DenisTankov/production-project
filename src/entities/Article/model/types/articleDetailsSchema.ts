import { Article } from "./article";

export interface ArticleDetailsSchema {
   isLoading: boolean;
   error?: boolean | string;
   data?: Article;
}
