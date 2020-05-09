<p>
  <a href="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/chat/README.tr.md">
    <img alt="Build Status" src="https://img.shields.io/static/v1?label=dil&message=tr&color=red" target="_blank" />
 </a>
  <a href="https://github.com/ilkerkesici/react-native-starter-kit/blob/master/template/chat/README.md">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=lang&message=en&color=blue" target="_blank" />
  </a>
</p>

# React-Native ve Socket.io ile Mesajlaşma Şablonu 

> Hızlıca Typescript ile react-native mesajlaşma uyguluması oluşturma paketi.

## :star: Özellikler

- Anlık mesajlaşma
- Mesaj ulaştığında özelleştirilmiş drop-down mesajı
- Anlık olarak kullanıcının son görülme durumunu görme
- Okunmayan mesajları görme
- Basitçe kayıt ol ve giriş yapma
- Çoklu dil seçeneği


![](./assets/dropdown_usage.gif)

![](./assets/online_status.gif)

![](./assets/info_read.gif)


## :arrow_down: Kurulum

#### Bu repository'i kopyalayın

```sh
git clone https://github.com/ilkerkesici/react-native-starter-kit.git
```
#### Klasörün içine girin

```sh
cd react-native-starter-kit
```
#### 'create_app.sh' dosyasını çalıştırın

```sh
./create_app.sh
```
#### Oluşturmak istediğiniz uygulamanızın ismini girin

```sh
# Enter your app name :
MyAwesomeApp
```
#### Şablonu seçiniz

```sh
# Enter template name :
chat
```
### Back-end Ayarları
Yukarıdaki adımları gerçekleştirdiğinizde 'MyAwesomeApp.Backend' klasörü de oluşturulmuş ve paketleri indirilmiş olacaktır. Eğer back-end'i de çalıştırmak istiyorsanız, '.env' dosyanındaki veri tabanı bilgilerini ve gizli anahtarınızı (SECRET_KEY) kendinize özel olarak güncellemelisiniz. Ayrıca 'chat.backend.sql' dosyanızı da veri tabanınızda içe aktarark (import) kolayca veri tabanı kurulumunu gerçekleştirmiş olursunuz ve back-end projesiyle entegre çalışan bir mesajlaşma uygulaması oluşturmuş olursunuz.


