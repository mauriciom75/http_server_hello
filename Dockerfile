FROM alpine

RUN apk add --update nodejs

COPY . /src

EXPOSE 3000

CMD ["node", "/src/app.js"]