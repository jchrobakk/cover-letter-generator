import { CoverLetterGenerator } from '@/components/ui/CoverLetterGenerator';

export default function Home() {
  return (
    <>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-center">
        Cover Letter Generator
      </h1>
      <CoverLetterGenerator />
    </>
  );
}
