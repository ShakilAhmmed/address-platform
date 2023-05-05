# ADDRESS PLATFORM

Application for ADDRESS Storing

## Installation

```bash
  cp .env.example .env
```

##### Write your NGINX and PHPMYADMIN PORT in .env and Set username and password for database

```bash 
    sudo docker-compose up -d 
    sudo docker exec -it address-platform-application bash
    composer install
    php artisan key:generate
    php artisan passport:install
    php artisan migrate
    php artisan db:seed
```

### Implemented API ENDPOINTS

```bash
   -Authentication
        1. [POST] 
            /api/v1/login
        2. [GET] 
            /api/v1/auth-user
        3. [POST]  
            /api/v1/logout
   -AddressBooks
        1. [POST] 
            /api/v1/address-books
        2. [GET] 
            /api/v1/address-books    
        2. [PUT] 
            /api/v1/address-books/{id}
        3. [DELETE]  
            /api/v1/address-books/{id}
```

### NEED TO IMPLEMENT API DOCS 

```bash
    http://127.0.0.1:8000/api/docs
```


### Run Code Analysis [must be into docker container]

```bash
    sudo docker exec -it address-platform-application
    php artisan insights
```
### Dev Tools

```bash
    1. PHP CS FIXER
    2. Grum PHP [code format check before commit]
    3. PHP Insights [ code quality analysis]
    4. Symfony Dump Server [dump and debug without effetcing browsers response]
```

