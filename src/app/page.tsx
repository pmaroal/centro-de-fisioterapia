import Note from './components/molecules/note'
import AddSection from './components/organisms/addSection'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome to the To Do List App
      </h1>
      <AddSection />
      <Note />
    </main>
  )
}
