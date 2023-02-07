import {
  ResultWrapper,
  ResultWrapperItem,
  TotalBillWrapper,
  RiderImage,
} from './styled';
import rider from './../../assets/rider.gif';

const Results: React.FC<{ deliveryFee: number; cartValue: number }> = (
  props
) => {
  return (
    <ResultWrapper>
      <RiderImage src={rider} alt="rider" />
      <ResultWrapperItem>
        <div>Cart Value €</div>
        <div>{props.cartValue.toFixed(2)}</div>
      </ResultWrapperItem>
      <ResultWrapperItem>
        <div>Delivery Fee €</div>
        <div>{props.deliveryFee.toFixed(2)}</div>
      </ResultWrapperItem>
      <hr />
      <TotalBillWrapper>
        <div>Total €</div>
        <div>{(props.deliveryFee + props.cartValue).toFixed(2)}</div>
      </TotalBillWrapper>
    </ResultWrapper>
  );
};

export default Results;
