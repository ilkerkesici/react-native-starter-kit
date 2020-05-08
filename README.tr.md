# react-native-starter-kit
Bu proje, tek bir komutla react-native projesi başlatma kitidir. Projeye kendi şablonlarınızı ekleyerek katkıda bulunabilirsiniz.

## :star2: Özellikler
- Hızlıca bir Typescript uygulama oluşturma
- Hızlıca sorun yaşamadan bir şablon(template) ile uygulama oluşturma
- Hızlıca mimariye uygun bileşenlerinizi (component) oluşturma

## :clipboard: Şablonlar
- Auth
>Basit bir giriş yapma ve kayıt olma şablonu. Daha fazla bilgi için <a href="https://github.com/ilkerkesici/react-native-starter-kit/tree/master/template/only_auth"> tıklayınız. </a>

## :star: Ekran görüntüleri
<p float="left">
  <img src="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/only_auth/assets/login_ss_1.png" alt="alt text" width="350px" height="650px">
  <img src="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/only_auth/assets/register_ss.png" alt="alt text" width="350px" height="650px">
</p>

## :warning: Bağımlılıklar
### Kurulum notu
Bu paket bağımlılıkları indirirken yarn kullanıyor. Bu yüzden uygulama oluşturmaya başlamadan önce yarn kurmalısınız.

## :arrow_down: Kurulum
#### Bu projeyi kopyalayın

```sh
git clone https://github.com/ilkerkesici/react-native-starter-kit.git
```
#### Klasörün içine girin

```sh
cd react-native-starter-kit
```
#### 'create_app.sh' dosyası için çalıştırma izni alın

```sh
chmod +x create_component.sh
```

## :flashlight: Kullanımı
### :iphone: Uygulama Oluşturma

#### 'create_app.sh' dosyasını Çalıştır

```sh
./create_app.sh
```
#### Uygulamınızın ismini girin

```sh
# Enter your app name :
MyAwesomeApp
```
#### Şablon ismi girin

```sh
# Enter template name :
auth # Eğer herhangi bir şablon kullanmak istemiyorsanız, 'Enter' tuşuna basmanız yeterli.
```
### :rocket: Bileşen(Component) Oluşturma
#### Proje Klasörüne Giriniz
```sh
cd MyAwesomeApp
```
#### 'create_component.sh' dosyasını çalıştırın 
```sh
./create_component.sh
```
#### Bileşen(Component) ismini giriniz
```sh
 # Enter the component name?
MyAwesomeComponent
```

## :clap: Nasıl katkıda bulunabilirsiniz?
Merhaba geliştiricile! Kendi şablonunuzu yükleyerek bu projeye destek olabilirsiniz. Projeye destek olmak isterseniz aşağıdaki adımları takip edebilirsiniz.

#### Bir bash dosyası oluşturun
'create_authantication_template.sh' dosyası gibi bir bash dosyası oluşturmalısınız. Ardından şablonunuzun bağımlı olduğu kütüphane scriptlerini oraya yazmalısınız.

#### Bir src klasörü oluşturun
Adı src olan bir kalsör oluşturun ve şablonunuzu veya bileşenlerinizi(component) o klasörün altında oluşturunuz.

#### Bir pull isteği açmalısınız
Yukarıdaki adımları yaptıktan sonra, bir pull request açmalısınız.
