import {BACKGROUND} from '@src/assets';

export const DATA = {
  PETROL: [
    {
      id: 1,
      img: BACKGROUND.PETROL_1,
      coins: 15,
      description:
        '50% discount for every $100 top-up on your Shell Petrol Card',
      note: '',
      showL: false,
    },
    {
      id: 2,
      img: BACKGROUND.PETROL_2,
      coins: 1000,
      description: '70% discount top-up on your Shell Petrol Card',
      note: 'Insufficient coins',
      showL: true,
    },
  ],
  RENTAL: [
    {
      id: 1,
      img: BACKGROUND.RENTAL_1,
      coins: 20,
      description: 'Get $20 Rental rebate',
    },
    {
      id: 2,
      img: BACKGROUND.RENTAL_2,
      coins: 15,
      description: 'Get $500 Rental rebate',
    },
  ],
  FOOD: [
    {
      id: 1,
      img: BACKGROUND.FOOD_1,
      coins: 25,
      description: 'NTUC Fairprice $50 Voucher',
    },
    {
      id: 2,
      img: BACKGROUND.FOOD_2,
      coins: 5,
      description: 'Free Cold Stone Sundae at any flavour!',
    },
  ],
};
