class AIHelperRepositoryImpl {
  private API_ENDPOINT =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"; // Replace
  private API_KEY = "AIzaSyD9ucACadff7qIHejpjzqp6zhZmNA8ttkk"; // Replace

  async sendImageAndMessage(base64: string, message: string): Promise<string> {
    const payload = {
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64,
              },
            },
            {
              text: message,
            },
          ],
        },
      ],
    };

    const response = await fetch(`${this.API_ENDPOINT}?key=${this.API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (
      data &&
      data.candidates &&
      data.candidates[0].content &&
      data.candidates[0].content.parts
    ) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Error: Could not process image.");
    }
  }
}

export const AIHelperRepository = new AIHelperRepositoryImpl();
