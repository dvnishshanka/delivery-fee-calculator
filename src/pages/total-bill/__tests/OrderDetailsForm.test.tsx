import userEvent from '@testing-library/user-event';
import OrderDetailsForm from '../OrderDetailsForm';
import { screen, render } from '@testing-library/react';

// TODO: Fix errors caused by antd matchMedia.
describe.skip('Order Detail Form testing', () => {
  test('empty form submission', () => {
    render(
      <OrderDetailsForm
        onSubmitOrderDetails={() => jest.fn()}
        onResetForm={() => jest.fn()}
      />
    );

    const submitButton = screen.getByTestId(/Calculate Delivery Fee/i);
    userEvent.click(submitButton);

    const validationMsg = screen.getByTestId(/Cart value is required/i);
    expect(validationMsg).toBe(/Cart value is required/i);
  });
});
