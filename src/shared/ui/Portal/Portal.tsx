import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
   children: ReactNode;
   element?: HTMLElement;
   container: HTMLElement;
}

export const Portal = (props: PortalProps) => {
   const { children, element = document.body, container = document.body } = props;

   return createPortal(children, container);
};
//element
