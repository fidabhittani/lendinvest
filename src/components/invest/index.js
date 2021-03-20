import React, { useState, useMemo } from "react";
import { Card, Typography, message } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { setInvest } from "redux/actions";
import {
  findTotalAvailableAmount,
  findTotalAmount,
  findPercentages,
} from "utils/functions";
import LendButton from "components/common/button";
import "./index.css";
import Stats from "./stats";
import MakeInvestment from "./make.invest";

const { Text } = Typography;

/**
 * Invest component
 * @returns
 */

const Invest = () => {
  const dispatch = useDispatch();
  const setInvestAction = (...args) => dispatch(setInvest(...args));

  const [activeLoan, setActiveLoan] = useState({});
  const data = useSelector(({ app }) => app.data);

  /** Memoized calculations */
  const totlaAvailableAmount = useMemo(() => findTotalAvailableAmount(data), [
    data,
  ]);
  const totalAmount = useMemo(() => findTotalAmount(data), [data]);
  const { investedPercentage, availablePercentage } = useMemo(
    () => findPercentages(data),
    [data]
  );

  const startInvest = (loan) => {
    setActiveLoan(loan);
  };
  /**
   *  Set investment
   */
  const doInvestment = ({ investAmount }) => {
    setInvestAction({ investAmount, id: activeLoan.id });
    message.success(
      `£${investAmount} invested in ${activeLoan.title} successfully`
    );
    setActiveLoan({});
  };

  return (
    <div className="lend-invest">
      {data.map((loan) => {
        return (
          <Card title={loan.title} key={loan.id} className="lend-invest-item">
            <div>
              <Text>Amount : </Text>
              <Text type="secondary">£ {loan.amount}</Text>
            </div>

            <div>
              <Text>Available : </Text>
              <Text type="secondary">£ {loan.available}</Text>
            </div>

            <div className="lend-invest-action">
              <LendButton onClick={() => startInvest(loan)} text={"invest"} />
            </div>
          </Card>
        );
      })}
      <Stats
        availableAmount={totlaAvailableAmount}
        totalAmount={totalAmount}
        availablePercentage={availablePercentage}
        investedPercentage={investedPercentage}
      />

      <MakeInvestment
        loan={activeLoan}
        onCancel={() => setActiveLoan({})}
        doInvestment={doInvestment}
        onFinish={doInvestment}
      />
    </div>
  );
};

export default Invest;
