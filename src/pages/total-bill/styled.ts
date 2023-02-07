import styled from 'styled-components';
import { Form } from 'antd';

export const BillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1p grey;
  margin: 3rem auto 2rem auto;

  @media (max-width: 912px) {
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export const BillPageHeading = styled.h1`
  margin: 2rem auto 0rem auto;
`;

export const CalculationForm = styled(Form)`
  max-width: 800px;
  font-family: Omnes, sans-serif !important;

  @media (min-width: 912px) {
    margin-right: 3rem;
    flex-grow: 1;
  }
`;

export const CalculationFormItem = styled(Form.Item)`
  margin-bottom: 3rem;
`;

export const ResultWrapper = styled.div`
  max-width: 500px;
`;

export const ResultWrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const TotalBillWrapper = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  font-size: 1.3rem;
`;

export const RiderImage = styled.img`
  width: 350px;
`;

export const MsgLine = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
