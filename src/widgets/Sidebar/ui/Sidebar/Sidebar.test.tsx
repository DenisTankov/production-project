import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
// import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
   test("Sidebar", () => {
      componentRender(<Sidebar />);
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
   });

   test("test toogle", () => {
      componentRender(<Sidebar />);
      const toogleBtn = screen.getByTestId("sidebar-toggle");
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
      fireEvent.click(toogleBtn);
      expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
   });
});
