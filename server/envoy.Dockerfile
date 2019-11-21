FROM envoyproxy/envoy:latest
COPY ./server/envoy.yaml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml