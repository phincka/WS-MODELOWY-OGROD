export const colors = {
  pcolor: '#7D597F',
  black: '#000',
  white: '#fff',

  grey: '#DADED4',
  grey2: '#FAFAFA',
  grey3: '#EAEAEA',
  purple: '#533D5E',
}

export const alpha = {
  100: 'FF',
  95: 'F2',
  90: 'E6',
  85: 'D9',
  80: 'CC',
  75: 'BF',
  70: 'B3',
  66: 'A8',
  60: '99',
  50: '80',
  40: '66',
  33: '54',
  30: '4D',
  25: '40',
  20: '33',
  10: '1A',
  5: '0D',
  0: '00',
}


export const mobile = '@media screen and (max-width: 800px)'
export const hover = '@media (hover:hover) and (pointer: fine)'
export const touch = '@media (hover: none)'


export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const centerCol = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

export const colCenter = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}
export const colStart = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}

export const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
}

export const spaceBetweenCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const tit70 = {
  color: '#fff',
  fontSize: '7rem',
  textTransform: 'uppercase',
  textShadow: '0 0 .5rem #fff',
  fontWeight: 900,
}

export const tit65 = {
  color: '#89917C',
  fontSize: '6.5rem',
  fontWeight: 500,
  textAlign: 'center',

  i: {
    fontStyle: 'unset',
  }
}

export const tit50 = {
  color: '#7D597F',
  fontSize: '5rem',
  fontWeight: 700,
}

export const tit48 = {
  color: '#000',
  fontSize: '4.8rem',
  fontWeight: 700,
}

export const tit40 = {
  color: '#000',
  fontSize: '4rem',
  fontWeight: 600,
}

export const tit36 = {
  color: '#000',
  fontSize: '3.6rem',
  fontWeight: 600,
}

export const txt28 = {
  color: '#000',
  fontSize: '2.8rem',
  fontWeight: 400,
}

export const txt24 = {
  color: '#000',
  fontSize: '2.4rem',
  fontWeight: 600,
}

export const txt20 = {
  color: '#000',
  fontSize: '2rem',
  fontWeight: 400,
}

export const txt18 = {
  color: '#000',
  fontSize: '1.8rem',
  fontWeight: 400,
  lineHeight: '3.4rem',
  b: {
    fontWeight: 700,
  }
}

export const txt16 = {
  color: '#000',
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: '3.2rem',
  b: {
    fontWeight: 700,
  }
}

export const txt14 = {
  color: '#000',
  fontSize: '1.4rem',
  fontWeight: 400,
}


export const btn1 = {
  padding: '1rem 2rem',
  backgroundColor: colors.pcolor,
  transition: '.2s',
    '&:hover': {
      backgroundColor: '#533D5E',
    },
  
    span: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 500,
      color: colors.white,
      textTransform: 'uppercase',
    }
}

export const btn2 = {
  padding: '1rem 2rem',
  backgroundColor: colors.white,
  transition: '.2s',
    '&:hover': {
      backgroundColor: '#533D5E',
        span: {
          color: colors.white,
        }
    },

    span: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 500,
      color: colors.pcolor,
      textTransform: 'uppercase',
      transition: '.2s',
    }
}