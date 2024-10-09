FROM node:22-alpine
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
RUN npm update -g npm
WORKDIR /bot
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production
COPY . .
RUN chown -R node /bot
CMD [ "npm", "run", "start" ]
