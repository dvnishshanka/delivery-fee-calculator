import { IOrderDetails } from './types';
import {
  FIRST_DELIVERY_DISTANCE_BLOCK_METERS,
  MIN_CART_VALUE_WITHOUT_SURCHARGE_EUR,
  ADDITIONAL_DISTANCE_BLOCK_METERS,
  MAX_DELIVERY_FEE,
  MAX_NO_OF_ITEMS_WITHOUT_SURCHARGE,
  MIN_NO_OF_ITEMS_IN_BULK_ORDER,
  ADDITIONAL_FEE_FOR_BULK_ORDERS,
  FEE_PER_ITEM_FOR_ADDITIONAL_ITEM,
  MIN_CART_VALUE_TO_WAVEOFF_DELIVERY_FEE,
  FEE_FOR_ADDITIONAL_DISTANCE_BLOCK_EUR,
  FEE_FOR_FIRST_DELIVERY_DISTANCE_BLOCK_EUR,
  RUSH_TIME_SURCHARGE_FACTOR,
  RUSH_START_HOUR,
  RUSH_END_HOUR,
  RUSH_DAY,
} from '../../constants/AppConstants';

export const calDeliveryFee = (orderDetails: IOrderDetails) => {
  let deliveryFee = 0;

  if (orderDetails.cartValue >= MIN_CART_VALUE_TO_WAVEOFF_DELIVERY_FEE) {
    return deliveryFee;
  }

  // Calculate delivery surcharge if the Cart Value is less than a specific amount
  if (orderDetails.cartValue < MIN_CART_VALUE_WITHOUT_SURCHARGE_EUR) {
    deliveryFee += calSurchargeForCartValue(orderDetails.cartValue);
  }

  // Calculate the delivery surcharge if no of items in the cart is greater than a specific amount
  if (orderDetails.noOfItems > MAX_NO_OF_ITEMS_WITHOUT_SURCHARGE) {
    deliveryFee += calSurchargeForNoOfItems(orderDetails.noOfItems);
  }

  // Calculate distance related fee for the delivery
  deliveryFee += calDistanceRelatedFee(orderDetails.distance);

  // Delivery fee will be multiplied by a factor in rush hours
  if (
    orderDetails.orderDay === RUSH_DAY &&
    orderDetails.orderHour >= RUSH_START_HOUR &&
    orderDetails.orderHour <= RUSH_END_HOUR
  ) {
    deliveryFee = Number((deliveryFee * RUSH_TIME_SURCHARGE_FACTOR).toFixed(2));
  }

  // Delivery fee cannot exceed the MAX_DELIVERY_FEE
  deliveryFee = Math.min(deliveryFee, MAX_DELIVERY_FEE);

  return deliveryFee;
};

// Calculate delivery surcharge if the Cart Value is less than a specific amount
export const calSurchargeForCartValue = (cartValue: number) => {
  const surchargeFee = MIN_CART_VALUE_WITHOUT_SURCHARGE_EUR - cartValue;
  // Converted to a string and then to a number due to inability to represent float numbers precisely (Found during testing)
  return Number(surchargeFee.toFixed(2));
};

//Calculate distance related fee for the delivery
export const calDistanceRelatedFee = (distance: number) => {
  let distanceRelatedFee = FEE_FOR_FIRST_DELIVERY_DISTANCE_BLOCK_EUR;

  if (distance > FIRST_DELIVERY_DISTANCE_BLOCK_METERS) {
    const additionalFee =
      Math.ceil(
        (distance - FIRST_DELIVERY_DISTANCE_BLOCK_METERS) /
          ADDITIONAL_DISTANCE_BLOCK_METERS
      ) * FEE_FOR_ADDITIONAL_DISTANCE_BLOCK_EUR;
    distanceRelatedFee += additionalFee;
  }

  return distanceRelatedFee;
};

// Calculate the delivery surcharge related to no of items in the cart
export const calSurchargeForNoOfItems = (noOfItems: number) => {
  let surchargeForNoOfItems =
    (noOfItems - MAX_NO_OF_ITEMS_WITHOUT_SURCHARGE) *
    FEE_PER_ITEM_FOR_ADDITIONAL_ITEM;

  if (noOfItems >= MIN_NO_OF_ITEMS_IN_BULK_ORDER) {
    surchargeForNoOfItems += ADDITIONAL_FEE_FOR_BULK_ORDERS;
  }

  return surchargeForNoOfItems;
};
