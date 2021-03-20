import EnzymeToJson from "enzyme-to-json";
import { mount } from "enzyme";
import Stats from "./index";
import "utils/matchMedia.js";

const props = {
  availableAmount: 520,
  totalAmount: 380,
  availablePercentage: 38,
  investedPercentage: 62,
};

describe("Component: Stats", () => {
  it("renders correctly", () => {
    const subject = mount(<Stats {...props} />);
    expect(EnzymeToJson(subject)).toMatchSnapshot();
  });
});
