module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      'babel-plugin-styled-components',
      [
          'module-resolver',
          {
              root: ['.'],
              extensions: [
                  '.ios.ts',
                  '.android.ts',
                  '.ts',
                  '.ios.tsx',
                  '.android.tsx',
                  '.tsx',
                  '.jsx',
                  '.js',
                  '.json',
              ],
              alias: {
                  '@components': './src/components',
                  '@utils': './src/utils',
                  '@interface': './src/interface',
                  '@stack': './src/stack',
                  '@api': './src/api',
                  '@containers': './src/containers',
                  '@libs': './src/libs',
                  '@screens': './src/screens',
                  '@images': './src/images',
              },
          },
          // 'react-native-reanimated/plugin', <-- 여기 아님, 절대 아님
      ],
      'react-native-reanimated/plugin',
  ],
};