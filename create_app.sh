# tsx creation

#Take your app name
echo Enter the app name:
read app

echo "Enter js for Javascript templates, ts for Typescript templates : "
read type

if [ $type = "js" ]; then
    chmod +x ./src/create_js_app.sh # Give permission for execute
    ./src/create_js_app.sh $app
else                                  # default ts
    chmod +x ./src/create_ts_app.sh  # Give permission for execute
    ./src/create_ts_app.sh $app
fi;





