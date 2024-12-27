import AddSection from './components/organisms/addSection'
import Notes from './components/organisms/notes'

export default function Home() {
  return (
    <main className="max-w-8xl flex h-full flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome to the To Do List App
      </h1>
      <AddSection />
      <Notes />
    </main>
  )
}
