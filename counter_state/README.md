<div align="center">

# 🧮 Advanced Counter & Mini-Game Dashboard

### داشبورد پیشرفته شمارنده و مینی‌گیم

[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Fast-yellow?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

_Small steps. Big progress. Better habits, a brighter you._  
_قدم‌های کوچک. پیشرفت بزرگ._

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 🌟 Overview / درباره پروژه

**EN:** **Counter State** is a modular, clean, and educational React web application built with **Vite** and **Tailwind CSS**. It features custom hooks, Context API for state management, multi-language support (FA/EN), and fully documented JSDoc code.

**FA:** پروژه **Counter State** یک وب‌اپلیکیشن آموزشی، ماژولار و تمیز با ری‌اکت (**React**)، **Vite** و **Tailwind CSS** است. این پروژه شامل هوک‌های سفارشی، مدیریت استیت با Context API، پشتیبانی از دو زبان (فارسی و انگلیسی) و کامنت‌گذاری کامل JSDoc می‌باشد.

---

## 🚀 Key Features / ویژگی‌های کلیدی

- 🧭 **Responsive Navigation Bar / نوار ناوبری ریسپانسیو:**
  - EN: Dual-language switcher (EN/FA) & dynamic mode switcher (All / Counter / Game).
  - FA: سوئیچ دو زبانه (فارسی/انگلیسی) و تغییر مود فعال (همه / شمارنده / بازی).
- ➕ **Advanced Counter Module / ماژول شمارنده پیشرفته:**
  - EN: Customizable starting value, step increments/decrements, and reset functionality.
  - FA: مقدار اولیه سفارشی، تنظیم گام‌های افزایش/کاهش و قابلیت بازنشانی.
- 🎮 **Interactive Mini-Game Gauge / مینی‌گیم تعاملی:**
  - EN: Oscillating indicator gauge (-10 to +10) with score tracking and timer.
  - FA: نشانگر رفت و برگشتی (دامنه -۱۰ تا +۱۰) همراه با ثبت امتیاز و تایمر.

---

## 📸 UI Preview / پیش‌نمایش رابط کاربری

<div align="center">
  <img src="./preview.png" alt="Counter State Preview" width="100%" />
</div>

---

## 🛠️ Tech Stack / تکنولوژی‌های استفاده شده

- **Core / هسته:** React (Functional Components & Hooks)
- **Build Tool / ابزار بیلد:** Vite
- **Styling / استایل‌دهی:** Tailwind CSS
- **Language / زبان:** JavaScript (ESNext) / JSX

---

## 📁 Project Structure / ساختار پروژه

```text
counter_state/
├── public/                # Static assets / فایل‌های استاتیک
├── src/
│   ├── components/        # UI components (Navbar, CounterCard, GameCard, etc.)
│   ├── context/           # React Context (Language, Global State)
│   ├── hooks/             # Custom React Hooks
│   ├── utils/             # Helper functions & translations (translations.js)
│   ├── App.jsx            # Main Application entry
│   ├── index.css          # Tailwind CSS imports
│   └── main.jsx           # ReactDOM render root
├── package.json
└── README.md
```
