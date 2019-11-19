module.exports = {
  'extends': ['standard', 'standard-react'],
  'parser': 'babel-eslint',
  'rules': {
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'padded-blocks': 0,
    'camelcase': 0,
    'generator-star-spacing': 0,
  },
  'settings': {},
  'globals': {
    'isServer': true,
    'isClient': true,
    'store': true,
  },
  'env': {
    'jasmine': true,
    'jest': true,
    'browser': true,
    'node': true,
  },
}
