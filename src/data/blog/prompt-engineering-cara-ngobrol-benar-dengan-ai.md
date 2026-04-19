---
title: Prompt Engineering — Cara Ngobrol yang Benar dengan AI
pubDatetime: 2026-04-03T08:00:00Z
description: Kenapa dua orang yang tanya hal yang sama ke ChatGPT bisa dapat jawaban yang sangat berbeda? Jawabannya ada di cara mereka menulis prompt.
tags:
  - ai
  - prompt-engineering
  - produktivitas
draft: false
---

Ada yang tanya ke ChatGPT "buatkan essay" dan dapat hasil generik membosankan. Ada yang tanya hal serupa dan dapat tulisan yang hampir siap publish. Bedanya bukan di tools-nya — tapi di cara mereka bertanya.

Ini yang disebut *prompt engineering*.

## Kenapa Prompt Penting

AI language model bekerja berdasarkan konteks. Semakin kaya konteks yang kamu berikan, semakin relevan jawabannya. Model tidak bisa membaca pikiran kamu — dia hanya bisa merespons apa yang kamu tulis.

Prompt yang buruk → output yang buruk. Selalu.

## Anatomi Prompt yang Bagus

Prompt yang efektif biasanya punya empat elemen:

**1. Role** — kasih tahu AI siapa dia dalam konteks ini
```
Kamu adalah senior software engineer dengan 10 tahun pengalaman di backend...
```

**2. Context** — situasi atau latar belakang masalah
```
Saya sedang membangun REST API untuk aplikasi e-commerce dengan 10.000 user aktif...
```

**3. Task** — apa yang kamu minta secara spesifik
```
Tolong review kode ini dan identifikasi potensi bottleneck performa...
```

**4. Format** — bagaimana output yang kamu inginkan
```
Jawab dalam format bullet point, maksimal 10 poin, gunakan bahasa Indonesia.
```

## Teknik yang Paling Berguna

**Chain of Thought** — minta AI berpikir step by step sebelum menjawab
```
Sebelum menjawab, pikirkan dulu langkah-langkahnya secara bertahap.
```

**Few-shot prompting** — kasih contoh output yang kamu mau
```
Buat judul artikel dengan format seperti ini:
Contoh input: "belajar python"
Contoh output: "Python untuk Pemula: Dari Nol sampai Bisa dalam 30 Hari"

Sekarang buat untuk topik: "machine learning"
```

**Negative prompting** — kasih tahu apa yang tidak kamu mau
```
Jangan gunakan kata "leverage", "synergy", atau "paradigm". Hindari bahasa formal yang kaku.
```

## Kesalahan yang Paling Sering Dilakukan

- Terlalu singkat dan ambigu: *"buatkan artikel tentang AI"*
- Tidak kasih konteks audiens: untuk siapa konten ini?
- Tidak iterasi: satu kali tanya lalu menyerah kalau hasilnya kurang bagus
- Tidak kasih feedback: kalau kurang, bilang spesifik apa yang kurang

## Mulai dari Sini

Setiap kali mau tanya ke AI, tanya diri sendiri dulu: *"Apakah orang asing bisa memahami konteks pertanyaan ini?"*

Kalau tidak, tambahkan konteks lebih banyak. Itu saja sudah meningkatkan kualitas output secara signifikan.
