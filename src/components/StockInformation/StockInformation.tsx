import { memo } from 'react';
import { handleFinalStockPrice } from '../../utils/Stocks';
import { Typography, Box, useTheme } from '@mui/material';

interface StockInformationProp {
  stockUnit: number;
  stockPrice: number;
  isError?: boolean;
}

const StockInformation: React.FC<StockInformationProp> = memo(
  ({ stockUnit, stockPrice, isError }) => {
    const { palette } = useTheme();
    const getStock = (() => {
      if (!stockUnit) {
        return 1;
      }

      return stockUnit;
    })();

    return (
      <Box>
        <Box
          sx={{ backgroundColor: palette.gray.dark }}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box padding='10px'>
            <Typography color={palette.gray.light} variant='h5' component='h2'>
              AAPL
            </Typography>
            <Typography color={palette.gray.main} variant='body2' component='p'>
              APPLE INC
            </Typography>
          </Box>
          <Typography
            pr='10px'
            color={palette.gray.light}
            variant='h4'
            component='h4'
          >
            ${stockPrice.toFixed(2)}
          </Typography>
        </Box>
        <Box padding='10px'>
          <Typography color={palette.gray.dark} variant='body1' component='p'>
            Estimated trading amount:
          </Typography>
          {isError ? (
            <Typography
              color={palette.red.main}
              variant='body2'
              component='span'
            >
              {' '}
              Select number of Shares
            </Typography>
          ) : (
            <Typography color={palette.gray.main} variant='body1' component='p'>
              Buy {getStock}x${stockPrice} AAPL = $
              {handleFinalStockPrice(getStock, stockPrice)}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }
);

export default StockInformation;
