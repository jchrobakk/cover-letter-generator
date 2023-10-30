import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { content, title, description } = await request.json();

  console.log('content', content);
  console.log('title', title);
  console.log('description', description);

  const payload = {
    model: 'gpt-3.5-turbo-16k', // gpt-4 or gpt-3.5-turbo-16k
    messages: [
      {
        role: 'system',
        content: `You are a cover letter generator.
You will be given a job description along with the job applicant's resume.
You will write a cover letter for the applicant that matches their past experiences from the resume with the job description. Write the cover letter in the same language as the job description provided!
Rather than simply outlining the applicant's past experiences, you will give more detail and explain how those experiences will help the applicant succeed in the new job.
You will write the cover letter in a modern, professional style without being too formal, as a modern employee might do naturally.`,
      },
      {
        role: 'user',
        content: `My Resume: ${content}. Job title: ${title} Job Description: ${description}.`,
      },
    ],
    temperature: 30,
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const json = await response.json();

    const data = {
      title,
      content: json?.choices[0].message.content,
      tokenUsage: json?.usage.completion_tokens,
    };

    console.log('data', data);
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ message: 'Error!' });
  }
}