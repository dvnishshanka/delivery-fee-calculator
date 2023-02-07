import styled from 'styled-components';
import { InputNumber, DatePicker, Button } from 'antd';

export const PrimaryButton = styled(Button)`
  background-color: rgb(0 157 224);
  font-size: 1rem;
  border-color: rgb(0 194 232);
  margin-left: 1rem;
  font-family: Omnes, sans-serif !important;

  &:hover {
    cursor: pointer;
    border-color: rgb(7 116 162);
  }

  :disabled {
    background-color: grey;
    cursor: none;
  }
`;

export const SecondaryButton = styled(Button)`
  color: rgb(0 157 224);
  font-size: 1rem;
  border-color: rgb(0 194 232);
  margin-left: 1rem;
  font-family: Omnes, sans-serif !important;

  &:hover {
    cursor: pointer;
    color: rgb(7 116 162);
  }

  :disabled {
    background-color: grey;
    cursor: none;
  }
`;

export const NumberInput = styled(InputNumber)`
  width: 100%;
`;

export const DateTimePicker = styled(DatePicker)`
  width: 100%;
`;

export const PageFooter = styled.footer`
  background-color: rgba(32, 33, 37, 1);
  color: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding-right: 1rem;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }
`;
