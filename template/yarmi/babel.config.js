module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
          screens: './src/screens',
          components: './src/components',
          styles: './src/styles',
          helpers: './src/helpers',
          reducers: './src/reducers',
          store: './src/store',
          config: './src/config',
          containers: './src/containers',
          assets: './src/assets',
          enums: './src/enums'
        },
      },
    ],
  ],
};
