import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
   test("Sidebar", () => {
      renderWithTranslation(<Sidebar />);
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
   });

   test("test toogle", () => {
      renderWithTranslation(<Sidebar />);
      const toogleBtn = screen.getByTestId("sidebar-toggle");
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
      fireEvent.click(toogleBtn);
      expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
   });
});
