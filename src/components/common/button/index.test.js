import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import CustButton from "./index";

describe("Component: CustButton", () => {
  const onClick = jest.fn();
  const props = {
    text: "invest",
    onClick,
  };
  const btn = shallow(<CustButton {...props} />);

  it("renders correctly", () => {
    const tree = renderer.create(<CustButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a button with invest as text", () => {
    expect(btn.text()).toBe("invest");
  });

  it("button element click handle", () => {
    btn.children().simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
