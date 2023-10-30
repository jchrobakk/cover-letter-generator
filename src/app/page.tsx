export default function Home() {
  // const fetchCoverLetter = async () => {
  //   const res = await fetch('/api', {
  //     headers: {
  //       type: 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       content: 'Hello World!',
  //       title: 'Title',
  //       description: 'job description',
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };
  return (
    <main>
      <p className="text-center">Hello World!</p>
    </main>
  );
}
