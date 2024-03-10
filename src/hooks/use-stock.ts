import { ChangeEvent, useState } from 'react';
import { OptionsEnum } from '../types/types';

export const useStock = () => {
  const [stockUnit, setStockUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const value = parseInt(e.target.value);
      setStockUnit(value);
  };

  const onPurchase = async (price: number, selectedType: OptionsEnum) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));

      alert(
        `Purchase successful!\nPrice: $${price}\nOrder type: ${selectedType}`
      );
    } catch (error) {
      setError(error as Error);
      setIsLoading(false);

    } finally {
      setIsLoading(false);
    }
  };

  return { stockUnit, onPurchase, handleChange, isLoading, error };
};
