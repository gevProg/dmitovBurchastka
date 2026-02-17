# 🚀 Быстрый старт проекта

## Запуск базы данных и бэкенда

### Вариант 1: Docker (рекомендуется) ✅

1. **Запустить MongoDB в Docker:**
```bash
docker-compose up -d
```

2. **Проверить что MongoDB запущен:**
```bash
docker ps
# Должен быть контейнер moskva-plitka-mongo
```

3. **Запустить бэкенд:**
```bash
cd backend
npm install
npm run dev
```

4. **Проверить бэкенд:**
- Откройте: http://localhost:5000/health
- Должен вернуть JSON с статусом "ok"

---

### Вариант 2: Локальный MongoDB (macOS)

1. **Установить MongoDB через Homebrew:**
```bash
brew tap mongodb/brew
brew install mongodb-community
```

2. **Запустить MongoDB:**
```bash
brew services start mongodb-community
```

3. **Проверить что MongoDB работает:**
```bash
brew services list
# mongodb-community должен быть started
```

4. **Запустить бэкенд:**
```bash
cd backend
npm install
npm run dev
```

---

## Запуск фронтенда

```bash
npm install
npm run dev
```

Откройте: http://localhost:3000

---

## Остановить все

**Docker:**
```bash
docker-compose down
```

**Homebrew MongoDB:**
```bash
brew services stop mongodb-community
```

---

## Настройка email уведомлений

1. Откройте `backend/.env`
2. Заполните SMTP настройки:
   - SMTP_PASS - пароль от вашей почты
   - Для Mail.ru используйте пароль приложения (не основной пароль)

3. Перезапустите бэкенд

---

## Проверка форм

**Тест формы обратного звонка:**
```bash
curl -X POST http://localhost:3000/api/callback \
  -H 'Content-Type: application/json' \
  -d '{"name":"Тест","phone":"+79990001122"}'
```

**Тест формы контактов:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Тест","phone":"+79990001122","message":"Тестовое сообщение"}'
```

---

## Полезные команды

**Просмотр логов Docker:**
```bash
docker-compose logs -f mongodb
```

**Подключиться к MongoDB:**
```bash
docker exec -it moskva-plitka-mongo mongosh
use moskva-plitka
db.contacts.find()
db.callbacks.find()
```

**Очистить все данные Docker:**
```bash
docker-compose down -v
```
