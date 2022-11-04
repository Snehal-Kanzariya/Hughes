/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        midscreen: { max: '1400px' },
        xlscreen: { max: '1279px' },
        lgscreen: { max: '1024px' },
        smscreen: { max: '425px' },
      },
      fontFamily: {
        roboto: 'Roboto',
        rubic: 'Rubik'
      },

      fontSize: {
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        30: '30px',
        32: '32px',
        40: '40px',
      },

      lineHeight: {
        24: '24px',
        26: '26px',
        30: '30px',
        32: '32px',
        36: '36px',
        40: '40px',
        42: '42px',
        50: '50px',
      },

      borderRadius: {
        10: '10px',
      },

      width: {
        84: '84px',
      },

      height: {
        84: '84px',
      },

      gap: {
        94: '94px',
      },

      colors: {
        black: {
          100: '#2C2C2C',
        },
        blue: {
          100: '#18A5F4',
          200: '#004E7A',
        },
        sky: '#CBFFF3',
        gray: {
          100: '#444444',
          200: '#EEEEEE',
          300: '#707070',
        },
        yellow: {
          100: '#FFC75B',
        },
        green: {
          100: '#00AC83',
        },
      },
      opacity: {
        '0.99': '0.99',
        1: '1'
      },

      spacing: {
        20: '20%',
        288: '288px',
      },

      dropShadow: {
        'custom': '0 4px 14px rgba(0, 0, 0, 0.14)',
      },

      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      padding: {
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px',
        29: '29px',
        30: '30px',
        31: '31px',
        36: '36px',
        38: '38px',
        44: '44px',
        45: '45px',
        48: '48px',
        52: '52px',
        56: '56px',
        60: '60px',
        78: '78px',
        127: '127px',
        132: '132px',
      },
      margin: {
        10: '10px',
        20: '20px',
        40: '40px',
        48: '48px',
        50: '50px',
        60: '60px',
      },
    },
  },
  plugins: [],
}
