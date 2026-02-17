# Руководство по развёртыванию сайта Москва-Плитка

Это руководство описывает процесс развёртывания SEO-оптимизированного сайта тротуарной плитки.

## Содержание

1. [Требования](#требования)
2. [Локальный запуск](#локальный-запуск)
3. [Развёртывание на Vercel](#развёртывание-на-vercel)
4. [Развёртывание на VPS](#развёртывание-на-vps)
5. [Настройка Backend](#настройка-backend)
6. [Настройка MongoDB](#настройка-mongodb)
7. [Настройка домена и SSL](#настройка-домена-и-ssl)
8. [SEO оптимизация](#seo-оптимизация)
9. [Мониторинг](#мониторинг)

---

## Требования

### Для frontend (Next.js):

- Node.js 18.17 или выше
- npm 9+ или yarn 1.22+

### Для backend (Express):

- Node.js 18.17 или выше
- MongoDB 6.0+

---

## Локальный запуск

### 1. Клонирование и установка зависимостей

```bash
# Перейти в папку проекта
cd moskva-plitka

# Установить зависимости frontend
npm install

# Установить зависимости backend
cd backend
npm install
cd ..
```

### 2. Настройка переменных окружения

#### Frontend (.env.local):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
```

#### Backend (.env):

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/moskva-plitka
FRONTEND_URL=http://localhost:3000

# Email (опционально)
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_USER=your-email@mail.ru
SMTP_PASS=your-password
EMAIL_FROM=your-email@mail.ru
EMAIL_TO=your-email@mail.ru

# Telegram (опционально)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

### 3. Запуск MongoDB локально

```bash
# Windows (если MongoDB установлен)
mongod

# Или используйте Docker
docker run -d -p 27017:27017 --name mongodb mongo:6
```

### 4. Запуск приложений

```bash
# Терминал 1: Backend
cd backend
npm run dev

# Терминал 2: Frontend
npm run dev
```

Сайт будет доступен на http://localhost:3000

---

## Развёртывание на Vercel

### Шаг 1: Подготовка

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Установите Vercel CLI:

```bash
npm i -g vercel
```

### Шаг 2: Развёртывание

```bash
# В папке moskva-plitka
vercel

# Следуйте инструкциям:
# - Выберите "Link to existing project" или создайте новый
# - Подтвердите настройки
```

### Шаг 3: Настройка переменных окружения

В панели Vercel (Settings → Environment Variables):

| Переменная           | Значение                      |
| -------------------- | ----------------------------- |
| NEXT_PUBLIC_SITE_URL | https://moskva-plitka.com     |
| BACKEND_URL          | https://api.moskva-plitka.com |

### Шаг 4: Настройка домена

1. В панели Vercel: Settings → Domains
2. Добавьте ваш домен
3. Настройте DNS записи у регистратора:
    - A запись: `@` → IP Vercel
    - CNAME запись: `www` → `cname.vercel-dns.com`

---

## Развёртывание на VPS

### Требования к серверу

- Ubuntu 22.04 LTS
- 2 GB RAM минимум
- 20 GB SSD

### Шаг 1: Подготовка сервера

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2 для управления процессами
sudo npm install -g pm2

# Установка Nginx
sudo apt install -y nginx

# Установка Certbot для SSL
sudo apt install -y certbot python3-certbot-nginx
```

### Шаг 2: Установка MongoDB

```bash
# Импорт ключа MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor

# Добавление репозитория
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Установка
sudo apt update
sudo apt install -y mongodb-org

# Запуск и автозагрузка
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Шаг 3: Загрузка проекта

```bash
# Создание директории
sudo mkdir -p /var/www/moskva-plitka
sudo chown -R $USER:$USER /var/www/moskva-plitka

# Клонирование (или копирование через SFTP)
cd /var/www/moskva-plitka
git clone <your-repo-url> .

# Или через rsync
rsync -avz --exclude node_modules --exclude .next ./moskva-plitka/ user@server:/var/www/moskva-plitka/
```

### Шаг 4: Сборка и запуск

```bash
cd /var/www/moskva-plitka

# Frontend
npm install
npm run build

# Backend
cd backend
npm install
npm run build
cd ..

# Создание .env файлов
cp .env.example .env.local
cp backend/.env.example backend/.env
# Отредактируйте файлы с реальными значениями

# Запуск через PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Шаг 5: Создание ecosystem.config.js

```javascript
// /var/www/moskva-plitka/ecosystem.config.js
module.exports = {
    apps: [
        {
            name: "moskva-plitka-frontend",
            script: "npm",
            args: "start",
            cwd: "/var/www/moskva-plitka",
            env: {
                NODE_ENV: "production",
                PORT: 3000,
            },
        },
        {
            name: "moskva-plitka-backend",
            script: "npm",
            args: "start",
            cwd: "/var/www/moskva-plitka/backend",
            env: {
                NODE_ENV: "production",
                PORT: 5000,
            },
        },
    ],
};
```

### Шаг 6: Настройка Nginx

```nginx
# /etc/nginx/sites-available/moskva-plitka
server {
    listen 80;
    server_name moskva-plitka.com www.moskva-plitka.com;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Статические файлы Next.js
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Изображения
    location /images {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=2592000";
    }
}

# API сервер
server {
    listen 80;
    server_name api.moskva-plitka.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/moskva-plitka /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Шаг 7: SSL сертификат

```bash
sudo certbot --nginx -d moskva-plitka.com -d www.moskva-plitka.com -d api.moskva-plitka.com
```

---

## Настройка Backend

### Настройка Email уведомлений

1. Используйте корпоративную почту или сервис типа Mailgun/SendGrid
2. Для mail.ru создайте пароль приложения:
    - Настройки → Безопасность → Пароли приложений

### Настройка Telegram бота

1. Создайте бота через @BotFather
2. Получите токен
3. Узнайте chat_id:
    - Отправьте сообщение боту
    - Откройте: `https://api.telegram.org/bot<TOKEN>/getUpdates`
    - Найдите chat.id в ответе

---

## Настройка MongoDB

### Безопасность

```javascript
// Подключитесь к MongoDB
mongosh

// Создайте администратора
use admin
db.createUser({
  user: "admin",
  pwd: "strong-password-here",
  roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]
})

// Создайте пользователя для приложения
use moskva-plitka
db.createUser({
  user: "plitka-app",
  pwd: "another-strong-password",
  roles: [{ role: "readWrite", db: "moskva-plitka" }]
})
```

```bash
# Включите авторизацию в /etc/mongod.conf
security:
  authorization: enabled

sudo systemctl restart mongod
```

### Резервное копирование

```bash
# Создание скрипта бэкапа
cat > /var/www/backup-mongo.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/mongodb"
mkdir -p $BACKUP_DIR
mongodump --db moskva-plitka --out $BACKUP_DIR/$DATE
find $BACKUP_DIR -type d -mtime +7 -exec rm -rf {} +
EOF

chmod +x /var/www/backup-mongo.sh

# Добавление в cron (ежедневно в 3:00)
(crontab -l 2>/dev/null; echo "0 3 * * * /var/www/backup-mongo.sh") | crontab -
```

---

## SEO Оптимизация

### После развёртывания:

1. **Добавьте сайт в Яндекс.Вебмастер**:
    - https://webmaster.yandex.ru
    - Подтвердите права на сайт
    - Отправьте sitemap.xml

2. **Добавьте сайт в Google Search Console**:
    - https://search.google.com/search-console
    - Подтвердите права на сайт
    - Отправьте sitemap.xml

3. **Проверьте индексацию**:
    - В Яндексе: `site:moskva-plitka.com`
    - В Google: `site:moskva-plitka.com`

4. **Настройте Яндекс.Метрику**:
    - Создайте счётчик
    - Добавьте код в layout.tsx

5. **Настройте Google Analytics 4**:
    - Создайте аккаунт GA4
    - Добавьте gtag в layout.tsx

### Файл с аналитикой (добавить в layout.tsx):

```tsx
{/* Яндекс.Метрика */}
<Script id="yandex-metrika" strategy="afterInteractive">
  {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(XXXXXXXX, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  `}
</Script>

{/* Google Analytics */}
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## Мониторинг

### PM2 мониторинг

```bash
# Просмотр статуса
pm2 status

# Просмотр логов
pm2 logs

# Мониторинг в реальном времени
pm2 monit
```

### Uptime мониторинг

Используйте бесплатные сервисы:

- UptimeRobot (https://uptimerobot.com)
- Freshping (https://freshping.io)

### Настройка уведомлений при падении

PM2 может отправлять уведомления:

```bash
pm2 install pm2-slack
# или
pm2 install pm2-telegram
```

---

## Чек-лист после развёртывания

- [ ] Сайт открывается по HTTPS
- [ ] Все страницы работают
- [ ] Формы отправляются
- [ ] Уведомления приходят
- [ ] SSL сертификат действителен
- [ ] Sitemap доступен (/sitemap.xml)
- [ ] Robots.txt правильный (/robots.txt)
- [ ] Сайт добавлен в Яндекс.Вебмастер
- [ ] Сайт добавлен в Google Search Console
- [ ] Настроена аналитика
- [ ] Настроено резервное копирование
- [ ] Настроен мониторинг uptime

---

## Поддержка

При возникновении проблем:

1. Проверьте логи: `pm2 logs`
2. Проверьте статус MongoDB: `sudo systemctl status mongod`
3. Проверьте статус Nginx: `sudo systemctl status nginx`
4. Проверьте свободное место: `df -h`

---

_Документация создана для проекта moskva-plitka.com_
