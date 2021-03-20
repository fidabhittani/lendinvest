import { PageHeader } from "antd";

import Invest from "components/invest";

import "./index.css";
const App = () => {
  return (
    <div className="lendinvest-app">
      <PageHeader title="LendInvest Assignment" />
      <Invest />
    </div>
  );
};

export default App;
