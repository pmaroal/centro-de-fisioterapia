export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the To Do List App
      </h1>
      <div className="flex justify-center">
        <form action="" className="flex flex-col">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-gray-300 p-2 m-2"
          />
          <textarea
            placeholder="Content"
            className="border-2 border-gray-300 p-2 m-2 text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 m-2 rounded"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
}
