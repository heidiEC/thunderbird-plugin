class AISummarizer {
  constructor() {
    this.API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
    this.API_KEY = 'your-huggingface-api-key';
  }

  async summarize(text) {
    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: text,
        parameters: {
          max_length: 500,
          min_length: 100
        }
      })
    });

    const result = await response.json();
    return result[0].summary_text;
  }
} 