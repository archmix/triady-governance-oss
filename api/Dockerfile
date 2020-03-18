# base image
FROM jekyll/jekyll

RUN mkdir -p /app/site
VOLUME  /app/site

RUN mkdir -p /app/site/web-api
VOLUME /app/site/web-api

RUN mkdir -p /app/site/metadata
VOLUME /app/site/metadata

RUN chown -R jekyll:jekyll /app

WORKDIR /app/site

# add source
ADD . /app/site

CMD jekyll build --watch --trace --safe