
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface TrainingRoadmap {
  role: string;
  phases: {
    phase: number;
    title: string;
    focus: string;
    kpis: string[];
  }[];
  customMessage: string;
}

export const generateTrainingRoadmap = async (roleDescription: string): Promise<TrainingRoadmap> => {
  // Using gemini-3-flash-preview as it is the most cost-effective/free-tier friendly model
  const modelName = "gemini-3-flash-preview";
  
  const prompt = `
    You are an expert talent development architect for IBSRA Talent.
    Generate a customized 6-phase training roadmap for a hire in this role: "${roleDescription}".
    
    Phases should follow the IBSRA methodology:
    1. Discovery (Passion Match)
    2. Specialization (Fundamentals)
    3. Role-Specific (Tools/Stack)
    4. Industry Domain (Market Context)
    5. Real-World Internship (Applied Problem Solving)
    6. KPI-Proven (Performance Metrics)
    
    Keep the tone professional and the content highly specific to the role described.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING },
            customMessage: { type: Type.STRING },
            phases: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  focus: { type: Type.STRING },
                  kpis: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ["phase", "title", "focus", "kpis"]
              }
            }
          },
          required: ["role", "customMessage", "phases"]
        }
      }
    });

    if (!response.text) {
      throw new Error("No response text received from AI");
    }

    return JSON.parse(response.text.trim());
  } catch (error: any) {
    console.error("Error generating roadmap:", error);
    
    // Specifically handle the 429 (Too Many Requests) common in free tiers
    if (error?.message?.includes('429') || error?.status === 429) {
      throw new Error("RATE_LIMIT_REACHED");
    }
    
    throw new Error("FAILED_TO_GENERATE");
  }
};
