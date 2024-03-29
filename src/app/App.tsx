import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";

const App = () => {
   const { theme } = useTheme();

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={classNames("app", {}, [])}>
         <Suspense fallback="">
            <NavBar />
            <div className="content-page">
               <Sidebar />
               <AppRouter />
            </div>
         </Suspense>
      </div>
   );
};

export default App;
