# nginx
FROM nginx:alpine as nginx

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY /build/ /var/www/public/
