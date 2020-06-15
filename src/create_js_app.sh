echo Your app name is $1
echo "
There is no template for js so 
it create default app for js.

If you want to continue press Enter :
"
read template

npx react-native init $1 #create default app

cp -R ./create_component.sh ./$1 #copy create_component.sh file to project for easy create component

cd ./$1 # go to project file

npx react-native run-ios --simulator="iPhone 8"

