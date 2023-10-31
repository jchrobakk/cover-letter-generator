'use client';

import { CoverLetter } from '../CoverLetter';
import { CoverLetterForm } from '../CoverLetterForm';
import { useState } from 'react';
import { useToast } from './use-toast';

export const CoverLetterGenerator = () => {
  const { toast } = useToast();
  const [coverLetter, setCoverLetter] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchCoverLetter = async (
    resume: string,
    jobTitle: string,
    jobDescription: string,
    gptModel: string
  ) => {
    if (!process.env.OPENAI_API_KEY) {
      toast({
        title: 'Missing OPENAI_API_KEY',
        description:
          'This is only demo app. I am not able to host it for free. You can clone it and host it yourself.',
      });
      return;
    }
    setLoading(true);
    const res = await fetch('/api', {
      headers: {
        type: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        content: resume,
        title: jobTitle,
        description: jobDescription,
        gptModel,
      }),
    });
    const data = await res.json();
    setCoverLetter(data.coverLetterContent);
    setLoading(false);

    toast({
      title: 'Cover letter generated!',
      description: 'You can click it to copy it to your clipboard.',
    });
  };
  return (
    <>
      <CoverLetterForm
        loading={loading}
        onSubmit={fetchCoverLetter}
      />
      <CoverLetter
        loading={loading}
        content={coverLetter}
      />
    </>
  );
};
