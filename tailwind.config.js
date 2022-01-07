const tailwindcss = require('tailwindcss');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#327FC7'
        },
        gray: {
          900: '#222222',
          800: '#2f3136',
          700: '#333333',
          600: '#3D3D3D',
          400: '#d4d7dc',
          300: '#F5F5F5',
          200: '#FCFCFC',
          100: '#FFFFFF'
        }
      },
      fontFamily: {
        serif: [
          '"Helvetica Neue',
          '-apple-system',
          'Arial',
          'Helvetica'
        ]
      },
      maxHeight: {
        'h-fit-content': 'fit-content(20em)',
        98: '30rem'
      },
      minHeight: {
        30: '18rem'
      },
      fontSize: { xs: ['8px', { lineHeight: '1rem' }] },
      borderWidth: { 1: '1px' }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
{
}
