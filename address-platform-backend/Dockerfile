FROM php:8.2-fpm
MAINTAINER ShakilAhmmed
ARG user
ARG uid
# Install Dependencies
RUN apt-get update && apt-get install -y git curl libpng-dev libonig-dev libxml2-dev zip unzip

#install some base extensions
RUN apt-get install -y \
        libzip-dev \
        zip \
        zlib1g-dev\
  && docker-php-ext-install zip \
  && docker-php-ext-install gd
# Clear Cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql intl mbstring  pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www
RUN chown -R www-data:www-data /var/www
USER $user
