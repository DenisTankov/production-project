import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUiScrollByPath, uiActions } from "features/UI";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
   const { className, children, onScrollEnd } = props;
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
   const dispatch = useAppDispatch();
   const { pathname } = useLocation();
   const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, pathname));

   useInfiniteScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
   });

   useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
   });

   const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(
         uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
         })
      );
   }, 500);

   return (
      <main ref={wrapperRef} className={classNames(cls.page, {}, [className])} onScroll={onScroll}>
         {children}
         {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}></div> : null}
      </main>
   );
});
