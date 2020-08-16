echo "
-- Templates --
- auth
- chat
- yarmi
(Press Enter if you don't select a template)
"
echo Enter template name?
read template # template name


# Create app the given app name
npx react-native init $1  #1 is app name from create_app.sh
echo Your app, $1 is created successfully!
cd ./$1

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

if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        # Install pod dependencies
        cd ios
        pod install
        cd ..
fi


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
cp -R ./create_component.sh ./$1


if [ $template = "auth" ]; then
    chmod +x ./template/only_auth/create_authantication_template.sh  # Give permission for execute
    ./template/only_auth/create_authantication_template.sh $1
elif [ $template = "chat" ]
then
    chmod +x ./template/chat/create_chat_template.sh  # Give permission for execute
    ./template/chat/create_chat_template.sh $1
elif [ $template = "yarmi" ]
then
    chmod +x ./template/yarmi/create_yarmi_template.sh  # Give permission for execute
    ./template/yarmi/create_yarmi_template.sh $1
else
    echo your app is created 
fi;