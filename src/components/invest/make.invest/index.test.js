import EnzymeToJson from "enzyme-to-json";
import { mount } from "enzyme";
import MakeInvestment from "./index";
import "utils/matchMedia.js";

const loan = {
  id: "1",
  title: "Voluptate et sed tempora qui quisquam.",
  tranche: "A",
  available: "11,959",
  annualised_return: "8.60",
  term_remaining: "864000",
  ltv: "48.80",
  amount: "85,754",
};

describe("Component: MakeInvestment", () => {
  it("renders correctly", () => {
    const subject = mount(<MakeInvestment loan={loan} />);
    expect(EnzymeToJson(subject)).toMatchSnapshot();
  });
});
