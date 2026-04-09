# exts.dev — Browser Extensions Marketplace

## Концепция

**exts.dev** — витрина качественных браузерных расширений от timequity. Не маркетплейс третьих лиц, а курированная коллекция собственных инструментов.

### Позиционирование

> "Focused tools for focused people"

- Каждое расширение решает одну конкретную проблему
- Минимализм в дизайне и функционале
- Прозрачность: открытый код, честная privacy policy
- Качество важнее количества

### Целевая аудитория

- Разработчики и tech-savvy пользователи
- Remote workers
- Люди, ценящие минималистичные инструменты

---

## Уникальная ценность

**Почему не просто Chrome Web Store?**

1. **Единая точка входа** — все расширения в одном месте с единым стилем
2. **Прозрачность** — ссылки на GitHub, честное описание что делает и чего не делает
3. **Бренд** — узнаваемость timequity, доверие
4. **Контроль** — красивые страницы, а не ограниченный формат CWS
5. **SEO** — лендинги ранжируются лучше чем страницы в store

---

## Информационная архитектура

```
exts.dev/
│
├── / (Landing + Catalog)
│   ├── Hero: "Browser extensions that respect your time"
│   ├── Extensions Grid (фильтруемый)
│   └── Footer: links, legal
│
├── /graymode (Extension Page)
│   ├── Hero: название, tagline, CTA
│   ├── Problem → Solution
│   ├── Features list
│   ├── Screenshots/Demo
│   ├── Install button → Chrome Web Store
│   ├── Pricing (if applicable)
│   └── Links: GitHub, Support
│
├── /privacy (Shared Privacy Policy)
│   └── Единая policy для всех расширений
│
└── /terms (Terms of Service)
```

---

## UX Flow

### Landing Page (/)

```
┌─────────────────────────────────────────┐
│  exts.dev              [GitHub] [About] │
├─────────────────────────────────────────┤
│                                         │
│     Browser extensions that             │
│     respect your time                   │
│                                         │
│     Focused tools. No bloat.            │
│     Open source. Privacy-first.         │
│                                         │
├─────────────────────────────────────────┤
│  [All] [Focus] [Productivity] [DevTools]│
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │ 🔘      │  │ 🔧      │  │ ⚡      │ │
│  │GrayMode │  │ Soon... │  │ Soon... │ │
│  │Focus    │  │         │  │         │ │
│  └─────────┘  └─────────┘  └─────────┘ │
│                                         │
├─────────────────────────────────────────┤
│  © timequity · Privacy · Terms · GitHub    │
└─────────────────────────────────────────┘
```

### Extension Page (/graymode)

```
┌─────────────────────────────────────────┐
│  exts.dev              [GitHub] [About] │
├─────────────────────────────────────────┤
│                                         │
│  [Icon]  GrayMode                       │
│          Focus better by turning        │
│          distracting sites grayscale    │
│                                         │
│          [Install from Chrome Store]    │
│          Free · 10K+ users              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  THE PROBLEM                            │
│  ─────────────                          │
│  Bright colors trigger dopamine.        │
│  Social media is designed to addict.    │
│  You lose hours without noticing.       │
│                                         │
│  THE SOLUTION                           │
│  ─────────────                          │
│  GrayMode removes color from sites      │
│  you choose, making them boring         │
│  enough to leave.                       │
│                                         │
├─────────────────────────────────────────┤
│  FEATURES                               │
│  ─────────────                          │
│  ✓ One-click toggle                     │
│  ✓ Preset categories                    │
│  ✓ Custom blacklist                     │
│  ✓ Adjustable intensity                 │
│                                         │
├─────────────────────────────────────────┤
│  [Screenshot 1] [Screenshot 2]          │
├─────────────────────────────────────────┤
│  OPEN SOURCE                            │
│  View on GitHub →                       │
├─────────────────────────────────────────┤
│  © timequity · Privacy · Terms             │
└─────────────────────────────────────────┘
```

---

## Фильтры каталога

### Категории

| Категория | Описание | Расширения |
|-----------|----------|------------|
| **Focus** | Борьба с отвлечениями | GrayMode |
| **Productivity** | Ускорение работы | (planned) |
| **DevTools** | Инструменты разработчика | (planned) |
| **Privacy** | Защита приватности | (planned) |

### Дополнительные фильтры (v2)

- Бесплатные / Платные
- Платформа: Chrome / Firefox / Edge
- Сортировка: популярность, дата

---

## Дизайн-система

### Цвета

```css
:root {
  /* Background */
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-card: #1a1a1a;

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #888888;
  --text-muted: #555555;

  /* Accent */
  --accent: #4CAF50;
  --accent-hover: #66BB6A;

  /* Borders */
  --border: #2a2a2a;
}
```

### Типографика

```css
/* Display: для заголовков hero */
font-family: 'Space Grotesk', sans-serif;

/* Body: для текста */
font-family: 'Inter', -apple-system, sans-serif;

/* Mono: для кода, технических деталей */
font-family: 'JetBrains Mono', monospace;
```

### Компоненты

- **Card**: темный фон, subtle border, hover glow
- **Button Primary**: accent color, bold text
- **Button Secondary**: outline, ghost style
- **Tag/Badge**: pill shape, muted colors
- **Navigation**: minimal, sticky header

---

## Технический стек

### Варианты

| Вариант | Плюсы | Минусы |
|---------|-------|--------|
| **Static HTML/CSS** | Простота, скорость, 0 зависимостей | Дублирование кода |
| **Astro** | Компоненты, MD контент, 0 JS | Новый инструмент |
| **Next.js SSG** | Знакомый, гибкий | Overkill для статики |

**Рекомендация**: Static HTML/CSS для MVP, Astro для масштабирования.

### Хостинг

- **Cloudflare Pages** — бесплатно, быстро, домен exts.dev
- GitHub Pages как backup

### Структура файлов

```
exts.dev/
├── index.html
├── privacy.html
├── terms.html
├── graymode/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js (фильтры)
│   └── images/
│       ├── logo.svg
│       └── extensions/
│           └── graymode/
├── CNAME
└── robots.txt
```

---

## Privacy Policy (общая)

Единая privacy policy для всех расширений с секциями:

1. **Overview** — кто мы, что делаем
2. **Per-Extension Details** — таблица с данными каждого расширения
3. **Common Principles** — общие принципы (no tracking, local storage)
4. **Contact** — как связаться

Формат: `/privacy` показывает всё, `/privacy#graymode` — якорь на конкретное.

---

## Монетизация (future)

1. **Freemium расширения** — базовая версия бесплатно, Pro за деньги
2. **Donations** — GitHub Sponsors, Buy Me a Coffee
3. **Партнёрства** — white-label версии для компаний

---

## Метрики успеха

- Посещения сайта (Cloudflare Analytics)
- Переходы в Chrome Web Store (UTM метки)
- Установки расширений
- GitHub stars

---

## Будущие расширения (идеи)

| Название | Категория | Описание |
|----------|-----------|----------|
| **TabZen** | Focus | Лимит открытых вкладок |
| **CleanFeed** | Focus | Скрытие отвлекающих элементов |
| **DevPanel** | DevTools | Быстрые инструменты разработчика |
| **PrivacyShield** | Privacy | Блокировка трекеров |
