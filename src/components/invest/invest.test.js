import EnzymeToJson from "enzyme-to-json";
import { mount } from "enzyme";
import Invest from "./index";
import { Provider } from "react-redux";
import store from "../../redux";
import "utils/matchMedia.js";
const WrapInvest = () => {
  return (
    <Provider store={store}>
      <Invest />
    </Provider>
  );
};

describe("Component: Invest", () => {
  it("renders correctly", () => {
    const subject = mount(<WrapInvest />);
    expect(EnzymeToJson(subject)).toMatchSnapshot();
  });
});
