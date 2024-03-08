import React, { ChangeEvent, useState } from 'react';
import { OPTIONS } from '../../constants/OrderCard';
import { useStock } from '../../hooks/use-stock';
import useStockData from '../../hooks/use-stock-data';
import { OptionsEnum } from '../../types/types';
import StockInformation from '../StockInformation/StockInformation';
import { Typography, Button, Box, TextField, useTheme } from '@mui/material';
import { useQuery } from '../../styles/breakpoints';
import OptionsSelect from '../OptionsSelect/OptionsSelect';

const OrderCard: React.FC = () => {
  const { palette } = useTheme();
  const { stockUnit, setStockUnit, onPurchase, isLoading } = useStock();
  const { stockPrice } = useStockData();
  const { isMobile } = useQuery();
  const [selectedOption, setSelectedOption] = useState(OptionsEnum.Market);
  const isError = stockUnit < 1 || isNaN(stockUnit);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO hook
    const value = parseInt(e.target.value);
    setStockUnit(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPurchase(stockPrice, selectedOption);
  };

  return (
    <Box
      maxWidth='31.25rem'
      p='1.875rem 1.875rem 10rem 1.875rem'
      sx={{ backgroundColor: palette.tertiary.dark }}
    >
      <Typography
        color={palette.tertiary.light}
        mb='5rem'
        variant='h3'
        component='h1'
      >
        Stock order
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type='text'
          variant='outlined'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: palette.gray.main,
              },
              '&:hover fieldset': {
                borderColor: palette.gray.main,
              },
            },
          }}
          InputLabelProps={{ style: { color: palette.gray.main } }}
          InputProps={{ style: { color: palette.gray.main } }}
          label='Security'
          value='AAPL'
          defaultValue='AAPL'
          margin='normal'
        />
        <Box
          display='flex'
          gap='0.625rem'
          height='6.25rem'
          // pb='200px'
          id='krabas'
          alignItems='center'
        >
          <Box display='flex' flexDirection='column'>
            <TextField
              type='number'
              variant='outlined'
              label='Shares'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: isError ? palette.red.main : palette.gray.main,
                  },
                  '&:hover fieldset': {
                    borderColor: isError ? palette.red.main : palette.gray.main,
                  },
                  minWidth: isMobile ? '4.0625rem' : '8.3181rem',
                },
              }}
              InputLabelProps={{
                style: {
                  color: isError ? palette.red.main : palette.gray.main,
                },
              }}
              InputProps={{
                style: {
                  color: isError ? palette.red.main : palette.gray.main,
                },
              }}
              onChange={handleChange}
              value={stockUnit}
              error={stockUnit < 1}
              inputProps={{ min: 1, max: 100 }}
              margin='normal'
            />
            {isError && (
              <Typography
                margin='normal'
                color={palette.red.main}
                variant='body2'
                component='span'
              >
                Please add a number
              </Typography>
            )}
          </Box>
          <OptionsSelect
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
        </Box>{' '}
        <StockInformation
          stockUnit={stockUnit}
          isError={isError}
          stockPrice={stockPrice}
        />
        <Box display='flex' justifyContent='flex-end' mt='2.5rem'>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disableRipple
            disableElevation
            sx={{
              borderRadius: '1.875rem',
              letterSpacing: '0.0625rem',
              textTransform: 'capitalize',
              '&:disabled': {
                backgroundColor: palette.gray.dark,
              },
            }}
            disabled={isLoading}
          >
            {isLoading ? '...loading' : 'Buy APPL'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OrderCard;
