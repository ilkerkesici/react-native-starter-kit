# tsx creation

#Take your app name
echo Enter the app name:
read app

echo "Enter js for Javascript templates, ts for Typescript templates : "
read type

if [ $type = "js" ]; then
    chmod +x ./create_js_app.sh # Give permission for execute
    ./create_js_app.sh $app
else                                  # default ts
    chmod +x ./create_ts_app.sh  # Give permission for execute
    ./create_ts_app.sh $app
fi;





