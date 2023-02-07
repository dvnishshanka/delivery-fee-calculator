import {
  NumberInput,
  DateTimePicker,
  PrimaryButton,
  SecondaryButton,
} from '../../components/common/styled';
import { CalculationForm, CalculationFormItem } from './styled';
import { IOrderDetails } from './types';
import { Form } from 'antd';

import {
  CART_VALUE_REQUIRED,
  DELIVERY_DISTANCE_REQUIRED,
  ORDER_DATE_TIME_REQUIRED,
  NO_OF_ITEMS_REQUIRED,
} from '../../constants/AppConstants';

const OrderDetailsForm: React.FC<{
  onSubmitOrderDetails: (orderDetails: IOrderDetails) => void;
  onResetForm: () => void;
}> = (props) => {
  const [form] = Form.useForm();

  const submitHandler = (values: any) => {
    // Get the UTC day- 0 for Sunday, 1 for Monday ..
    const day = values.orderDateAndTime['$d'].getUTCDay();

    // Get the UTC hour- 0 to 23
    const hour = values.orderDateAndTime['$d'].getUTCHours();

    const orderDetails = {
      cartValue: +values.cartValue,
      distance: +values.distance,
      orderDay: day,
      orderHour: hour,
      noOfItems: +values.noOfItems,
    };

    props.onSubmitOrderDetails(orderDetails);
    console.log('values', values);
    const date = values.orderDateAndTime['$d'];
    console.log(day);
    console.log(date.toUTCString());
    console.log(hour);
  };

  // Reset the form
  const onReset = () => {
    form.resetFields();
    props.onResetForm();
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16, offset: 8 },
    },
  };

  return (
    <CalculationForm {...formItemLayout} onFinish={submitHandler} form={form}>
      <CalculationFormItem
        name="cartValue"
        label="Cart Value (€)"
        rules={[{ required: true, message: CART_VALUE_REQUIRED }]}
      >
        <NumberInput
          placeholder="Enter the cart value"
          addonAfter={false}
          precision={2}
          step={0.1}
          min={0} // Assuming there is a free item that need to be delivered.
          max={1000000}
        ></NumberInput>
      </CalculationFormItem>
      <CalculationFormItem
        name="distance"
        label="Delivery Distance (m)"
        rules={[{ required: true, message: DELIVERY_DISTANCE_REQUIRED }]}
      >
        <NumberInput
          placeholder="Enter the distance"
          min={0}
          max={1000000} // Maximum distance input is limited to 1000km
        ></NumberInput>
      </CalculationFormItem>
      <CalculationFormItem
        name="noOfItems"
        label="No of Items"
        rules={[{ required: true, message: NO_OF_ITEMS_REQUIRED }]}
      >
        <NumberInput
          placeholder="Enter no of items"
          min={1}
          max={10000} // Maximum no of item input is limited to 10000
        ></NumberInput>
      </CalculationFormItem>
      <CalculationFormItem
        label="Order Date & Time"
        name="orderDateAndTime"
        rules={[{ required: true, message: ORDER_DATE_TIME_REQUIRED }]}
      >
        <DateTimePicker
          showTime={true}
          format="DD/MM/YYYY  HH:mm"
          placeholder="Select date and time"
        />
      </CalculationFormItem>

      <CalculationFormItem {...tailLayout}>
        <PrimaryButton type="primary" htmlType="submit">
          Calculate Delivery Fee
        </PrimaryButton>
        <SecondaryButton htmlType="button" onClick={onReset}>
          Reset
        </SecondaryButton>
      </CalculationFormItem>
    </CalculationForm>
  );
};

export default OrderDetailsForm;
