import { useUpdateNote } from '@/hooks/useUpdateNote'
import UpdateNoteForm from './components/molecules/updateNoteForm'
import AddSection from './components/organisms/addSection'
import Notes from './components/organisms/notes'

export default function Home() {
  const UpdateNotePage: React.FC = () => {
    const { updateNote, isLoading, error } = useUpdateNote()

    const handleUpdate = (
      id: number,
      fields: { title?: string; content?: string },
    ) => {
      updateNote(id, fields)
    }

    return (
      <main className="max-w-8xl flex h-full flex-col items-center justify-center gap-10">
        <h1 className="text-center text-4xl font-bold">
          Welcome to the To Do List App
        </h1>
        <AddSection />
        <Notes />

        {/* Update Section */}
        <div className="p-8">
          <h1 className="mb-6 text-2xl font-bold">Update a Note</h1>
          <UpdateNoteForm onUpdate={handleUpdate} />
          {isLoading && <p>Updating note...</p>}
          {error && <p className="text-red-500">Error: {error.message}</p>}
        </div>
      </main>
    )
  }
}
