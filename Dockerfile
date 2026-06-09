FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build


FROM nginx:alpine

RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

COPY --from=builder /app/out /usr/share/nginx/html

RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    index index.html; \
    port_in_redirect off; \
    absolute_redirect off; \
    real_ip_header X-Forwarded-For; \
    set_real_ip_from 0.0.0.0/0; \
    location /health { \
        return 200 "ok"; \
        add_header Content-Type text/plain; \
    } \
    location / { \
        try_files $uri $uri/ /index.html =404; \
    } \
}' > /etc/nginx/conf.d/default.conf && \
    sed -i '/^user /d' /etc/nginx/nginx.conf && \
    sed -i 's|^pid .*;|pid /tmp/nginx.pid;|' /etc/nginx/nginx.conf && \
    chown -R appuser:appgroup /var/cache/nginx /var/log/nginx /usr/share/nginx/html && \
    touch /tmp/nginx.pid && chown appuser:appgroup /tmp/nginx.pid

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/health || exit 1
