import React, { useState, useMemo } from "react";
import {
  Card,
  Typography,
  Modal,
  Statistic,
  Row,
  Col,
  Space,
  Form,
  InputNumber,
} from "antd";

import { useSelector, useDispatch } from "react-redux";
import { setInvest } from "redux/actions";
import {
  findTotalAvailableAmount,
  findTotalAmount,
  findPercentages,
  formatAmountNum,
} from "utils/functions";
import LendButton from "components/common/button";
import "./index.css";

const { Text } = Typography;

const Invest = () => {
  const dispatch = useDispatch();

  const [activeLoan, setActiveLoan] = useState(null);

  const setInvestAction = (...args) => dispatch(setInvest(...args));

  const data = useSelector(({ app }) => app.data);

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
    setActiveLoan(null);
  };

  return (
    <div className="lend-invest">
      {data.map((loan) => {
        return (
          <Card title={loan.title} key={loan.id} className="lend-invest-item">
            <div>
              <Text>Amount : </Text>
              <Text type="secondary">{loan.amount}</Text>
            </div>

            <div>
              <Text>Available : </Text>
              <Text type="secondary">{loan.available}</Text>
            </div>

            <div className="lend-invest-action">
              <LendButton onClick={() => startInvest(loan)} text={"invest"} />
            </div>
          </Card>
        );
      })}
      <Card>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic
              title="Available Amount for investment"
              value={totlaAvailableAmount}
              valueStyle={{ color: "#3f8600" }}
              prefix="£"
            />
          </Col>

          <Col span={6}>
            <Statistic
              title="Total Amount"
              value={totalAmount}
              valueStyle={{ color: "#3f8600" }}
              prefix="£"
            />
          </Col>

          <Col span={6}>
            <Statistic
              title="Total Invested Percentage"
              value={investedPercentage}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              suffix="%"
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Available Percentage"
              value={availablePercentage}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              suffix="%"
            />
          </Col>
        </Row>
      </Card>

      {activeLoan && (
        <Modal
          title={"Invest In Loan"}
          visible={Boolean(activeLoan)}
          footer={null}
          closable
          onCancel={() => setActiveLoan(null)}
        >
          <Space direction="vertical">
            <Text strong>{activeLoan.title}</Text>
            <Space>
              <Text>Available : </Text>
              <Text type="secondary">{activeLoan.available}</Text>
            </Space>
            <Space>
              <Text>Total : </Text>
              <Text type="secondary">{activeLoan.amount}</Text>
            </Space>

            <Form layout="inline" onFinish={doInvestment}>
              <Form.Item
                name="investAmount"
                rules={[
                  { required: true, message: "Enter amount" },
                  {
                    type: "number",

                    max: formatAmountNum(activeLoan.available),
                    message: `Maximum available invest amount is ${activeLoan.available}`,
                  },
                ]}
              >
                <InputNumber size="large" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item>
                <LendButton text="invest" />
              </Form.Item>
            </Form>
          </Space>
        </Modal>
      )}
    </div>
  );
};

export default Invest;
