# Samza - Open Source Article Summarizer

![Samza](public/ScreenShots/samza.png)

## Overview

Simplify your reading with Samza, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.

## Getting Started

### Prerequisites

- Node.js installed (https://nodejs.org/)
- Git installed (https://git-scm.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MuhammadKaifNazeer/samza.git
    ```

2. Navigate to the project directory:

    ```bash
    cd samza
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Get your API key from [Article Extractor and Summarizer API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel), and add it to the `.env` file in the project root.

    ```env
    VITE_RAPID_API_ARTICLE_KEY=your_api_key_here
    ```
    
5. Run the following command to start the development server:

    ```bash
     npm run dev
    ```
