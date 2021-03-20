import { render, screen } from "@testing-library/react";
import App from "./index";
import { Provider } from "react-redux";
import store from "../../redux";
import "utils/matchMedia.js";
const WrapApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("Render Page Header", () => {
  render(<WrapApp />);
  const elem = screen.getByText(/Current Loans/i);
  expect(elem).toBeInTheDocument();
});
