FROM node:20-alpine

WORKDIR /app

# Копируем ВСЁ содержимое репозитория
COPY . .

# Заходим в папку проекта
WORKDIR /app/voronezh-lawyer-main

# Устанавливаем зависимости
RUN npm install

# Собираем проект
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
