FROM node:19.0-alpine as BUILD
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install @angular/cli
RUN npm link @angular/cli
COPY . .
RUN npm run build
RUN apk update
RUN apk add chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN ng build && ng test
CMD ["/bin/sh"]