```
brew install mkcert
mkcert --install
mkdir cert; cd cert
mkcert -keyfile key.pem -cert-file cert.pem localhost 127.0.0.1 ::1

