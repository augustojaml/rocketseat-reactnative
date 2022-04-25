module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@global': './src/global',
            '@hooks': './src/hooks',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
