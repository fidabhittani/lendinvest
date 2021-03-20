import React, { useEffect, useMemo } from "react";
import { Modal, Space, Typography, Form, InputNumber } from "antd";
import { formatAmountNum } from "utils/functions";
import LendButton from "components/common/button";
const { Text } = Typography;

const MakeInvestment = ({ loan, doInvestment, ...props }) => {
  const visible = useMemo(() => Boolean(loan.id), [loan]);
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [visible, form]);

  return (
    <Modal
      {...props}
      title={"Invest In Loan"}
      visible={visible}
      footer={null}
      closable
    >
      <Space direction="vertical">
        <Text strong>{loan.title}</Text>
        <Space>
          <Text>Total : </Text>
          <Text type="secondary">£ {loan.amount}</Text>
        </Space>

        <Space>
          <Text>Available : </Text>
          <Text type="secondary">£ {loan.available}</Text>
        </Space>

        <Form form={form} layout="inline" onFinish={doInvestment}>
          <Form.Item
            name="investAmount"
            rules={[
              { required: true, message: "Investment amount required" },
              {
                type: "number",
                max: formatAmountNum(loan.available),
                message: `Maximum available invest amount is ${loan.available}`,
              },
            ]}
          >
            <InputNumber
              size="large"
              placeholder="Enter investment amount"
              style={{ width: "100%" }}
              className="lendinvest-input"
            />
          </Form.Item>

          <Form.Item>
            <LendButton text="invest" />
          </Form.Item>
        </Form>
      </Space>
    </Modal>
  );
};

export default MakeInvestment;
