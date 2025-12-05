import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"use your api "});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
        {
            role:"user",
            parts:[{text:"What's the worst reply to I love you? i need rost version replay to this question with in   in 10 word "}]
        },
        




        
    //   {
    //     role: "user",
    //     parts: [{ text: "What is my name?" }]
    //   },
    //   {
    //     role: "user",
    //     parts: [{ text: "My name is Chandan. Nice to meet you." }]
    //   }  
    ],
  });
  console.log(response.text);
}


await main();
