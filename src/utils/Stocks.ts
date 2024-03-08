export const handleFinalStockPrice = (stockUnit: number, stockPrice: number) => {
    if (stockUnit && stockPrice) {
      return (stockPrice * stockUnit).toFixed(2);
    }
    return 1;
  };