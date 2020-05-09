# tsx creation

#Take your app name
echo Enter the app name?
read app

echo "

-- Templates --
- auth
- chat
(Press Enter if you don't select a template)
"
echo Enter template name?
read template # template name

# Create app the given app name
npx react-native init $app --template typescript
echo Your app, $app is created successfully!
cd ./$app

echo Your dependencies install.....

# Install dependencies
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
yarn add --dev @types/react @types/react-native

# Create rn-cli.config.ts file
touch rn-cli.config.js
echo "module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};" >> rn-cli.config.js

# remove template folder
# If dont't remove, dublicate error exist
rm -rf template

# Create tsconfig.json file
rm -rf tsconfig.json
touch tsconfig.json

# Modify tsconfig.json file
echo '{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "resolveJsonModule": true,
  }
}' >> tsconfig.json

# Install test dependencies
yarn add --dev ts-jest

yarn add --dev @types/jest @types/react @types/react-native @types/react-test-renderer

echo ".jest/" >> .gitignore

rm -rf App.js

# Install pod dependencies
cd ios
pod install
cd ..

# Create typescript App file
touch App.tsx

echo "import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';



const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <Text> My custom application creator! </Text>
      </SafeAreaView>
    </>
  );
};

export default App;

" >> App.tsx
cd .. # go from ./app to ./
cp -R ./create_component.sh ./$app


if [ $template = "auth" ]; then
    chmod +x ./template/only_auth/create_authantication_template.sh  # Give permission for execute
    ./template/chat/create_authantication_template.sh $app
elif [ $template = "chat" ]
then
    chmod +x ./template/chat/create_chat_template.sh  # Give permission for execute
    ./template/chat/create_chat_template.sh $app
else
    cd ./$app
    npx react-native run-ios --simulator="iPhone 8" 
fi;





