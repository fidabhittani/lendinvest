import { PageHeader } from "antd";

import Invest from "components/invest";

import "./index.css";
const App = () => {
  return (
    <div className="lendinvest-app">
      <PageHeader title="Current Loans" />
      <Invest />
    </div>
  );
};

export default App;
