# Mail Assist AI – AI Powered Gmail Reply Assistant

Mail Assist AI is a full-stack AI-powered email assistant that generates contextual email replies directly inside Gmail using Gemini AI.

The project combines:
- Spring Boot backend
- React frontend
- Chrome Extension integration
- Gemini AI API
- Real-time email reply generation

The Chrome extension injects an **AI Reply** button into Gmail compose/reply workflows, allowing users to generate professional email responses instantly.

---

# Features

- AI-generated contextual email replies
- Gmail Chrome Extension integration
- Professional / Casual / Friendly tone support
- Spring Boot REST API backend
- Gemini AI API integration
- React frontend interface
- Dynamic Gmail DOM injection using MutationObserver
- Auto-insert generated replies into Gmail compose box

---

# Tech Stack

## Frontend
- React.js
- Axios
- Custom CSS

## Backend
- Spring Boot
- WebClient (Reactive HTTP Client)
- REST APIs

## AI Integration
- Gemini AI API

## Browser Extension
- Chrome Extension APIs
- Content Scripts
- MutationObserver
- DOM Manipulation

---

# Project Architecture

```text
Chrome Extension / React Frontend
                ↓
        Spring Boot Backend
                ↓
          Gemini AI API
                ↓
      AI Generated Response
```

---

# Folder Structure

```text
Mail-Assist-AI/
│
├── Backend/
│   ├── controller/
│   ├── service/
│   ├── dto/
│   └── resources/
│
├── Frontend/
│   ├── src/
│   └── public/
│
└── Extension/
    └── MailMind-AI-EXT/
```

---

# Backend Setup

## Prerequisites

- Java 17+
- Maven
- Gemini API Key

## Configure Environment

Create:

```properties
src/main/resources/application.properties
```

Add:

```properties
spring.application.name=emailwriter

gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=
gemini.api.key=YOUR_API_KEY
```

---

## Run Backend

```bash
cd Backend
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# Frontend Setup

## Install Dependencies

```bash
cd Frontend
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Chrome Extension Setup

## Load Extension in Chrome

1. Open Chrome
2. Go to:

```text
chrome://extensions
```

3. Enable:

```text
Developer Mode
```

4. Click:

```text
Load Unpacked
```

5. Select:

```text
Extension/MailMind-AI-EXT
```

---

# How It Works

1. Open Gmail
2. Compose or reply to an email
3. Extension injects **AI Reply** button
4. Click button
5. Extension extracts email content
6. Backend sends prompt to Gemini AI
7. AI-generated response is inserted automatically into Gmail compose box

---

# API Endpoint

## Generate Email Reply

### POST

```http
/api/email/generate
```

### Request Body

```json
{
  "emailContent": "Can we schedule a meeting tomorrow?",
  "tone": "professional"
}
```

### Response

```text
Dear [Name],

Thank you for your email...
```

---

# Future Improvements

- Streaming AI responses
- Multi-model support
- Authentication & user accounts
- Reply history
- Smart prompt templates
- AI response regeneration
- Dark/Light theme
- Extension popup dashboard
- Gmail thread context understanding

---

# Challenges Solved

- Gmail dynamic DOM handling
- Chrome Extension content script injection
- AI API integration
- Real-time DOM updates using MutationObserver
- Backend-frontend-extension communication

---

# Screenshots

_Add screenshots/gifs here_

---

# License

MIT License
