import { useState } from 'react';
import { OptionsEnum } from '../types/types';

export const useStock = () => {
  const [stockUnit, setStockUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onPurchase = async (price: number,selectedType:OptionsEnum) => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        alert(`Purchased at ${price} with order type ${selectedType}`);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setError(error as Error);
      setIsLoading(false);
    }
  };
  

  return { stockUnit, setStockUnit, onPurchase, isLoading, error };
};
