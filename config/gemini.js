import { GoogleGenerativeAI } from "@google/generative-ai"

//const apiKey = process.env.GEMINI_API_KEY;  // Use env variable
const genAI = new GoogleGenerativeAI("AIzaSyBDZTBIAtwCMwAsJs20Tf6RycsVSzNNf74");

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-thinking-exp-01-21",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
