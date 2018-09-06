FROM nginx:alpine

COPY nginx-site.conf /etc/nginx/conf.d/app.conf.template
COPY start-nginx.sh /usr/sbin/start

RUN chmod u+x /usr/sbin/start

EXPOSE 80 443
WORKDIR ${APP_DIR}

CMD [ "start" ]