# Node.js Chat App With Socket

> Clean and minimalist Node.js template for a quick start with Chat Applications.

## :star: Features

- Chat with users as real-time with Socket.io
- Update last seen status of the user
- Send data when a user connected or disconnected
- Update reading status of messages



## :arrow_down: Installation


#### Clone this repository

```sh
git clone https://github.com/ilkerkesici/node-chatapp-backend-socket.git
```

#### Install dependencies

```sh
npm install
```

#### Create .env file

Create .env file in your project root directory and then add these lines

```sh
host=YOUR_HOST              # Your Database host
user=YOUR_USERNAME          # Your Database user
password=DB_PASSWORD        # Your Database password
database=DB_NAME            # Your Database name
secret_key=YOUR_SECRET_KEY  # Your secret key for crypto
crypto_func=CRYPTO_FUNC     # Your crypto function type  
crypto_digest=DIGEST        # Your criypto digest type
port=YOUR_SERVER_PORT       # Your server port
```

#### Create databse

Import chat.backend.sql file into your databse


#### Start

```sh
nodemon run
```
