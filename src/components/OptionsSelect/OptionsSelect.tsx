import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { OPTIONS } from '../../constants/OrderCard';
import { OptionsEnum } from '../../types/types';

interface OptionsSelectProps {
  selectedOption: OptionsEnum;
  setSelectedOption: (option: OptionsEnum) => void;
}
const OptionsSelect: React.FC<OptionsSelectProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const { palette } = useTheme();

  return (
    <>
      {OPTIONS.map((option, index) => (
        <Box key={index}>
          <Button
            variant='contained'
            size='small'
            disableRipple
            disableElevation
            onClick={() => setSelectedOption(option as OptionsEnum)}
            sx={{
              color: palette.purple.main,
              textTransform: 'capitalize',
              borderRadius: '1.875rem',
              fontWeight: selectedOption === option ? 'bold' : 'normal',
              backgroundColor:
                selectedOption === option ? 'secondary' : palette.red.dark,
              width: '100%',
            }}
          >
            {option}
          </Button>
        </Box>
      ))}
    </>
  );
};

export default OptionsSelect;
