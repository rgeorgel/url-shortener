FROM node:16-alpine

RUN apk --no-cache add curl

RUN ln -sf /usr/share/zoneinfo/GMT+0 /etc/localtime && echo GMT+0 > /etc/timezone

RUN npm install -g nodemon typescript

HEALTHCHECK --interval=5s --timeout=5s --start-period=60s CMD curl --fail http://localhost:$HEALTH_CHECK_PORT/health || exit 1
