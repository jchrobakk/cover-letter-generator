'use client';

import { CoverLetter } from '../CoverLetter';
import { CoverLetterForm } from '../CoverLetterForm';
import { useState } from 'react';

export const CoverLetterGenerator = () => {
  const [coverLetter, setCoverLetter] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchCoverLetter = async (
    resume: string,
    jobTitle: string,
    jobDescription: string
  ) => {
    const res = await fetch('/api', {
      headers: {
        type: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        content: resume,
        title: jobTitle,
        description: jobDescription,
      }),
    });
    const data = await res.json();
    console.log(data);
    setCoverLetter(data.content);
  };
  return (
    <>
      <CoverLetterForm
        loading={loading}
        onSubmit={fetchCoverLetter}
      />
      <CoverLetter content={coverLetter} />
    </>
  );
};
