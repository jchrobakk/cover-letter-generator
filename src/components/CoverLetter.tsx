export const CoverLetter = ({ content }: { content?: string }) => {
  return (
    <div className="max-ws-sm mx-auto text-center">
      {content ? <p>{content}</p> : <p>Nothing generated yet</p>}
    </div>
  );
};
