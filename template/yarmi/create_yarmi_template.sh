echo creating your yarmi....
echo $1 creating template

cd $1 # Go to project folder

# Clone template from GitHub
git clone https://github.com/ilkerkesici/rnsk-yarmi-template.git

rm -rf .git # Remove git 
cp -R ./rnsk-yarmi-template/src ./

rm -rf rnsk-yarmi-template

# Remove changed files
rm -rf App.tsx
rm -rf babel.config.js
rm -rf tsconfig.js

cp -R ../template/yarmi/App.tsx ./
cp -R ../template/yarmi/babel.config.js ./
cp -R ../template/yarmi/tsconfig.json ./

yarn add @types/react-native-vector-icons @types/react-redux @types/redux @types/redux-thunk react-native-dropdownalert react-native-gesture-handler react-native-reanimated react-native-router-flux react-native-screens react-native-vector-icons react-redux @react-native-community/async-storage react-native-skeleton-placeholder react-native-material-menu react-native-linear-gradient react-native-actionsheet @types/react-native-material-menu @types/react-native-actionsheet prop-types @types/prop-types

yarn add --dev babel-plugin-module-resolver

if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        # Install pod dependencies
        cd ios
        pod install
        cd ..
        echo Your app is opening ...
        npx react-native run-ios --simulator="iPhone 8" 
fi


