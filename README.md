
# Express Security

A project im using to understand how to implement modern security
into my express.js web application.




## Installation

Install ExpressSecurity with Github CLI

```bash
  git clone https://github.com/IssiahB/ExpressSecurity.git
  cd ExpressSecurity
```

Then to install packages run
```bash
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI`
`BASE64_32BYTE_ENCRYPT`
`BASE64_64BYTE_SIGN`

Optional:
`PORT`

**DB_URI** is a String variable used to connect with a mongoDB database
an example of this would be:
`DB_URI="mongodb://127.0.0.1:27017/userDB"`

**BASE64_32BYTE_ENCRYPT** and **BASE64_64BYTE_SIGN** are just two BASE64
strings, with 32 bytes and 64 bytes respectivly.

**PORT** is optional, it is just an integer specifying the port to
host the express server.

## Author

- [@Issiah Banda](https://www.github.com/IssiahB)

