import { OpenAI } from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
export async function POST(req) {
  try {
    const { answers, selectedDisaster } = await req.json();
    // full list of questions to pair with answers
    const questions = [
      "1. What type of home do you live in?",
      "2. How many people live with you?",
      "3. Are there children under 12?",
      "4. Any elderly or mobility-impaired members?",
      "5. Is medical equipment needed at home?",
      "6. Any hearing, vision, or cognitive issues?",
      "7. Do you have animals needing evacuation?",
      "8. Is daily medication used?",
      "9. How would you evacuate?",
      "10. How well do you understand emergency instructions?",
      "11. Do you have a go-bag or kit ready?"
    ];
    const pairedAnswers = answers.map((a, i) => `${questions[i]} Answer: ${a}`).join("\n");

    const prompt = `
You are an emergency preparedness assistant.

The user is preparing for a ${selectedDisaster} emergency.

Here are their household details:
${pairedAnswers}

Based on this information, create a personalized emergency preparedness plan. Use clear sections, bullet points, and action-oriented language.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // you can put "gpt-4" if you have premium
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
    const plan = completion.choices[0].message.content;
    return Response.json({ plan });
  } catch (err) {
    console.error("OpenAI API error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to generate plan." }),
      { status: 500 }
    );
  }
}
