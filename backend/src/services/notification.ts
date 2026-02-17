import nodemailer from "nodemailer";

interface NotificationData {
    name: string;
    phone?: string;
    message?: string;
    rating?: number;
    text?: string;
}

type NotificationType = "callback" | "contact" | "review";

// Email transporter
const createTransporter = () => {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
        return null;
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
};

// Send email notification
const sendEmailNotification = async (
    type: NotificationType,
    data: NotificationData,
): Promise<void> => {
    const transporter = createTransporter();
    if (!transporter) {
        console.log("Email not configured, skipping notification");
        return;
    }

    let subject = "";
    let text = "";

    switch (type) {
        case "callback":
            subject = `🔔 Новая заявка на обратный звонок - ${data.name}`;
            text = `
Новая заявка на обратный звонок

Имя: ${data.name}
Телефон: ${data.phone}
Время: ${new Date().toLocaleString("ru-RU")}

---
Перезвоните клиенту как можно скорее!
      `;
            break;

        case "contact":
            subject = `📧 Новое сообщение с сайта - ${data.name}`;
            text = `
Новое сообщение с формы контактов

Имя: ${data.name}
Телефон: ${data.phone}
Сообщение:
${data.message}

Время: ${new Date().toLocaleString("ru-RU")}
      `;
            break;

        case "review":
            subject = `⭐ Новый отзыв - ${data.rating} звёзд от ${data.name}`;
            text = `
Новый отзыв (требует модерации)

Имя: ${data.name}
Оценка: ${"⭐".repeat(data.rating || 0)}
Текст отзыва:
${data.text}

Время: ${new Date().toLocaleString("ru-RU")}

---
Одобрите или отклоните отзыв в админ-панели.
      `;
            break;
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject,
            text,
        });
        console.log(`Email notification sent: ${type}`);
    } catch (error) {
        console.error("Email notification error:", error);
    }
};

// Send Telegram notification
const sendTelegramNotification = async (
    type: NotificationType,
    data: NotificationData,
): Promise<void> => {
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
        console.log("Telegram not configured, skipping notification");
        return;
    }

    let message = "";

    switch (type) {
        case "callback":
            message = `🔔 *Новая заявка на звонок*\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}`;
            break;

        case "contact":
            message = `📧 *Новое сообщение*\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n\n💬 Сообщение:\n${data.message}`;
            break;

        case "review":
            message = `⭐ *Новый отзыв*\n\n👤 ${data.name}\n${"⭐".repeat(data.rating || 0)}\n\n💬 ${data.text}`;
            break;
    }

    try {
        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: "Markdown",
            }),
        });
        console.log(`Telegram notification sent: ${type}`);
    } catch (error) {
        console.error("Telegram notification error:", error);
    }
};

// Main notification function
export const sendNotification = async (
    type: NotificationType,
    data: NotificationData,
): Promise<void> => {
    // Send both email and Telegram notifications
    await Promise.all([
        sendEmailNotification(type, data),
        sendTelegramNotification(type, data),
    ]);
};
