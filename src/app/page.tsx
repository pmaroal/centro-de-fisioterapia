export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome to the To Do List App
      </h1>
      <div className="flex justify-center">
        <form action="" className="flex flex-col">
          <input
            type="text"
            placeholder="Title"
            className="m-2 border-2 border-gray-300 p-2 text-black"
          />
          <textarea
            placeholder="Content"
            className="m-2 border-2 border-gray-300 p-2 text-black"
          ></textarea>

          <button
            type="submit"
            className="m-2 rounded bg-blue-500 p-2 text-white"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  )
}
