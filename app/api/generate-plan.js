import { OpenAI } from "openai";

export async function POST(req) {
  const body = await req.json();
  const { answers, selectedDisaster } = body;

  console.log("API KEY:", process.env.OPENAI_API_KEY); // ✅ You can log it here to check

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful disaster response assistant.`,
        },
        {
          role: "user",
          content: `Here are the answers: ${JSON.stringify(
            answers
          )}, and the selected disaster is ${selectedDisaster}. Give me a personalized plan.`,
        },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    return Response.json({ result: aiResponse });
  } catch (error) {
    console.error("OpenAI error:", error);
    return new Response("Error generating response", { status: 500 });
  }
}
