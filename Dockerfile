FROM node:19.0-alpine as BUILD
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install @angular/cli
RUN npm link @angular/cli
COPY . .
RUN npm run build
RUN ng build && ng test
CMD ["/bin/sh"]