FROM scratch
ARG BUILD_DATE
ARG VCS_REF
LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name="" \
      org.label-schema.description="" \
      org.label-schema.url="https://vcs.manifoldfinance.com/" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url="https://github.com/manifoldfinance/vcs.git" \
      org.label-schema.vendor="CommodityStream" \
      org.label-schema.version=$VERSION \
      org.label-schema.schema-version="1.0"
