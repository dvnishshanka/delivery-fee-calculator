import {
  calSurchargeForNoOfItems,
  calDistanceRelatedFee,
  calSurchargeForCartValue,
  calDeliveryFee,
} from '../DeliveryFeeCalculations';

describe('Delivery Fee Cal Functions testing', () => {
  test('calculate the surcharge for cart value', () => {
    expect(calSurchargeForCartValue(8.9)).toBe(1.1);
    expect(calSurchargeForCartValue(1)).toBe(9);
  });

  test('calculate the fee component related to distance', () => {
    expect(calDistanceRelatedFee(0)).toBe(2);
    expect(calDistanceRelatedFee(1000)).toBe(2);
    expect(calDistanceRelatedFee(1499)).toBe(3);
    expect(calDistanceRelatedFee(1500)).toBe(3);
    expect(calDistanceRelatedFee(1501)).toBe(4);
  });

  test('calculate the surcharge if the no of items is higher', () => {
    expect(calSurchargeForNoOfItems(4)).toBe(0);
    expect(calSurchargeForNoOfItems(5)).toBe(0.5);
    expect(calSurchargeForNoOfItems(10)).toBe(3);
    expect(calSurchargeForNoOfItems(13)).toBe(5.7);
  });

  test('calculate the total delivery fee', () => {
    expect(
      calDeliveryFee({
        cartValue: 10,
        distance: 10,
        noOfItems: 3,
        orderDay: 4,
        orderHour: 16,
      })
    ).toBe(2);
    expect(
      calDeliveryFee({
        cartValue: 9,
        distance: 10,
        noOfItems: 3,
        orderDay: 4,
        orderHour: 16,
      })
    ).toBe(3);
    expect(
      calDeliveryFee({
        cartValue: 9,
        distance: 10,
        noOfItems: 3,
        orderDay: 5,
        orderHour: 15,
      })
    ).toBe(3.6);
    expect(
      calDeliveryFee({
        cartValue: 100,
        distance: 10,
        noOfItems: 3,
        orderDay: 5,
        orderHour: 15,
      })
    ).toBe(0);
    expect(
      calDeliveryFee({
        cartValue: 0.1,
        distance: 2000,
        noOfItems: 15,
        orderDay: 5,
        orderHour: 15,
      })
    ).toBe(15);
  });
});
