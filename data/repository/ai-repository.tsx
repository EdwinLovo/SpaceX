import { ImageAnalysis } from "../models/ai/image-analysis";

class AIHelperRepositoryImpl {
  private API_ENDPOINT =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"; // Replace
  private API_KEY = "PLACEHOLDER"; // Replace

  async sendGolfDataForAnalysis(base64: string): Promise<ImageAnalysis> {
    const prompt = `
      Give me an analysis of my golf data. 
      Respond with a valid JSON object only—no Markdown formatting, no code blocks, no explanations, and no extra characters.
      Directly return a JSON object in this exact structure:
        {
          "summary": string,
          "keyPoints": string,
          "recommendations": string,
          "insights": string
          "conclusion": string
        }
    `;

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
              text: prompt,
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
    console.log("data: ", data.candidates[0].content.parts[0].text);

    if (
      data &&
      data.candidates &&
      data.candidates[0].content &&
      data.candidates[0].content.parts
    ) {
      try {
        // Parse the JSON response text into our model
        const analysis: ImageAnalysis = JSON.parse(
          data.candidates[0].content.parts[0].text
            .replace(/^```json/, "")
            .replace(/```$/, "")
            .trim()
        );
        return analysis;
      } catch (error) {
        throw new Error("Failed to parse AI response into JSON format.");
      }
    } else {
      throw new Error("Error: AI response structure is invalid.");
    }
  }
}

export const AIHelperRepository = new AIHelperRepositoryImpl();
