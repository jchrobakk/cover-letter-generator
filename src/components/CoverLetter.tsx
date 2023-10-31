import { useToast } from './ui/use-toast';

export const CoverLetter = ({
  content,
  loading,
}: {
  content?: string;
  loading?: boolean;
}) => {
  const { toast } = useToast();
  function copyToClipboard() {
    if (!content) return;

    navigator.clipboard.writeText(content);
    toast({
      title: 'Copied to clipboard!',
      description: 'You can paste it now.',
    });
  }
  return (
    <div
      onClick={copyToClipboard}
      className="max-w-2xl mt-4 mx-auto p-0.5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 cursor-pointer"
    >
      <p className="block p-4 bg-white dark:bg-black">
        {loading
          ? 'Loading...'
          : content
          ? content
          : 'Nothing was generated yet'}
      </p>
    </div>
  );
};
