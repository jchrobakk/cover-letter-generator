export const CoverLetter = ({
  content,
  loading,
}: {
  content?: string;
  loading?: boolean;
}) => {
  return (
    <div className="max-w-2xl mt-4 mx-auto text-center p-0.5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
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
