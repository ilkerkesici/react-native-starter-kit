<p>
  <a href="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/README.tr.md">
    <img alt="Build Status" src="https://img.shields.io/static/v1?label=dil&message=tr&color=red" target="_blank" />
 </a>
  <a href="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/README.md">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=lang&message=en&color=blue" target="_blank" />
  </a>
  
</p>

# react-native-starter-kit
The project is a custom starter kit to build TypeScript react-native apps only one click. Also, you can contribute to the project by adding your template.

## :star2: Features
- Start an app quickly with TypeScript
- Start an app with a template
- Create your component directory quickly

## :clipboard: Templates
- auth
>Basic authantication tamplete for quick start. <a href="https://github.com/ilkerkesici/react-native-starter-kit/tree/master/template/only_auth"> Click here </a> for more information.

- chat
>Basic chat tamplete for quick start. <a href="https://github.com/ilkerkesici/react-native-starter-kit/tree/master/template/chat"> Click here </a> for more information.

## :star: Screenshots
<p float="left">
  <img src="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/only_auth/assets/login_ss_1.png" alt="alt text" width="350px" height="650px">
  <img src="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/only_auth/assets/register_ss.png" alt="alt text" width="350px" height="650px">
</p>

## :warning: Dependency
### Note on installation
These starter pack use 'yarn' while installing react-native dependencies. Thus you must install 'yarn' before creating an app.

## :arrow_down: Installation
#### Clone this repository

```sh
git clone https://github.com/ilkerkesici/react-native-starter-kit.git
```
#### Enter the folder

```sh
cd react-native-starter-kit
```
#### Permission for create_app.sh

```sh
chmod +x create_component.sh
```

## :flashlight: Usage
### :iphone: Creating an App

#### Run create_app.sh

```sh
./create_app.sh
```
#### Enter your app name

```sh
# Enter your app name :
MyAwesomeApp
```
#### Enter your template

```sh
# Enter template name :
auth # If you don't want to create app with template, press 'Enter'
```
### :rocket: Creating a Component
#### Enter the project folder
```sh
cd MyAwesomeApp
```
#### Run 'create_component.sh' file 
```sh
./create_component.sh
```
#### Enter component name 
```sh
 # Enter the component name?
MyAwesomeComponent
```

## :clap: How to Contribute

Hello developers! You can contribute this starter pack and deploy your templates. If you want to contribute to this project,  you can follow these steps.

#### Creating bash file

You must create a bash file like 'create_authantication_template.sh' file. You must add your installation scripts for template dependencies here. 

#### Creating src folder
You must create folder name is src, and add your tamplete or your components into this folder.

#### Opening a pull request
After you've made your changes or added features, you should open a pull request.
