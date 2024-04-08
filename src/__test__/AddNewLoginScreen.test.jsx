import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddNewLoginScreen from "../components/AddNewLoginScreen/AddNewLoginScreen";
import { LoginListThemeProvider } from "../context/LoginListContext";

test("shows an alert when not all fields are filled in", () => {
  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  render(
    <LoginListThemeProvider>
      <AddNewLoginScreen />
    </LoginListThemeProvider>
  );

  const submitButton = screen.getByText(/Add login/i);
  fireEvent.click(submitButton);

  expect(alertSpy).toHaveBeenCalled();

  alertSpy.mockRestore();
});
