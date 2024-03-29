import React, { useState } from 'react';
import { useStock } from '../../hooks/use-stock';
import useDataFetch from '../../hooks/use-data-fetch';
import { OptionsEnum } from '../../types/types';
import StockInformation from '../StockInformation/StockInformation';
import { Typography, Button, Box, TextField, useTheme } from '@mui/material';
import { useQuery } from '../../styles/breakpoints';
import OptionsSelect from '../OptionsSelect/OptionsSelect';

const OrderCard: React.FC = () => {
  const { palette } = useTheme();
  const {
    stockUnit,
    handleChange,
    onPurchase,
    isLoading: isPurchaseLoading,
  } = useStock();
  const { stockPrice, isLoading: isFetchingLoading } = useDataFetch();
  const { isMobile } = useQuery();
  const [selectedOption, setSelectedOption] = useState(OptionsEnum.Market);
  const isError = stockUnit < 1 || isNaN(stockUnit);
  const isButtonDisabled = isFetchingLoading || isPurchaseLoading || isError;

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
          InputLabelProps={{ style: { color: palette.purple.light } }}
          InputProps={{ style: { color: palette.purple.light } }}
          label='Security'
          defaultValue='AAPL'
          margin='normal'
        />
        <Box display='flex' gap='0.625rem' height='6.25rem' alignItems='center'>
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
                    borderColor: isError
                      ? palette.red.main
                      : palette.purple.light,
                  },
                  minWidth: isMobile ? '5.4619rem' : '8.3181rem',
                },
              }}
              InputLabelProps={{
                style: {
                  color: isError ? palette.red.main : palette.purple.light,
                },
              }}
              InputProps={{
                style: {
                  color: isError ? palette.red.main : palette.purple.light,
                },
              }}
              onChange={handleChange}
              value={isNaN(stockUnit) ? '' : stockUnit.toString().slice(0, 3)}
              error={isError}
              margin='normal'
            />
            <Typography
              margin='normal'
              color={isError ? palette.red.main : palette.transparent.main}
              variant='body2'
              component='span'
              fontSize='9px'
            >
              Please add a number
            </Typography>
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
          isFetchingLoading={isFetchingLoading}
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
            }}
            disabled={isButtonDisabled}
          >
            {isPurchaseLoading ? '...loading' : 'Buy APPL'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OrderCard;
