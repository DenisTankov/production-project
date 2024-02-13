import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: FC = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
