import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
   className?: string;
   block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
   const { className, block } = props;

   return (
      <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
         <img src={block.src} alt={block.title} className={cls.img} />
         {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
   );
});