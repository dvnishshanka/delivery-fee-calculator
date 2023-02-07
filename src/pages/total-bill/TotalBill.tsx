import { useState } from 'react';
import AddOrderDetails from './OrderDetailsForm';
import Results from './Results';
import { IOrderDetails } from './types';
import { calDeliveryFee } from './DeliveryFeeCalculations';
import { BillWrapper, BillPageHeading } from './styled';
import AdditionalMsg from './AdditionalMsg';

const TotalBill = () => {
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [cartValue, setCartValue] = useState(0);

  const submitOrderDetails = (orderDetails: IOrderDetails) => {
    setDeliveryFee(calDeliveryFee(orderDetails));
    setCartValue(orderDetails.cartValue);
  };

  const resetDataHandler = () => {
    setDeliveryFee(0);
    setCartValue(0);
  };

  return (
    <>
      <BillPageHeading>
        Would you like to check the delivery fee? 😃
      </BillPageHeading>
      <BillWrapper>
        <AddOrderDetails
          onSubmitOrderDetails={submitOrderDetails}
          onResetForm={resetDataHandler}
        />
        <Results cartValue={cartValue} deliveryFee={deliveryFee}></Results>
      </BillWrapper>
      {cartValue !== 0 && deliveryFee === 0 && (
        <AdditionalMsg msg="Your Delivery fee is waived off !!! 🎉🎉" />
      )}
    </>
  );
};

export default TotalBill;
