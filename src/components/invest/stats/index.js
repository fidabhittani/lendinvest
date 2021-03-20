import React from "react";
import { Card, Statistic, Row, Col } from "antd";

/**
 *  Stats Component
 * @param {*} param0
 * @returns
 */

const Stats = ({
  availableAmount,
  totalAmount,
  availablePercentage,
  investedPercentage,
}) => {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic
            title="Available Amount for investment"
            value={availableAmount}
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
  );
};

export default Stats;
