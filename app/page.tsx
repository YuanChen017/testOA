export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mx-10">
        <h1 className="flex justify-center font-bold">
          Rick And Morty Characters
        </h1>
        <div className="border flex flex-wrap gap-4 justify-evenly font-bold"></div>
        <div className="border flex gap-4 justify-evenly">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded">
            prev
          </button>
          <div className="flex gap-10 overflow-x-scroll"></div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded">
            next
          </button>
        </div>
      </div>
    </main>
  );
}
