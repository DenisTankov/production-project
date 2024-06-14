import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
   const { theme } = useTheme();
   const dispatch = useDispatch();
   const inited = useSelector(getUserInited);

   useEffect(() => {
      dispatch(userActions.initAuthData());
   }, [dispatch]);

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={classNames("app", {}, [])}>
         <Suspense fallback="">
            <NavBar />
            <div className="content-page">
               <Sidebar />
               {inited && <AppRouter />}
            </div>
         </Suspense>
      </div>
   );
};

export default App;
