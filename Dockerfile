FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm i pnpm -g
RUN pnpm install
COPY ./dist ./dist
CMD ["npm", "run start:prod"]
EXPOSE 3000
