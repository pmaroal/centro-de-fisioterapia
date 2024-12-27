'use client'
import { useFetchNotes } from '@/hooks/useFetchNotes'
import Nota from '../molecules/note'

const Notas: React.FC = () => {
  const { notes, error } = useFetchNotes()

  if (error) return <p>Error: {error}</p>

  return (
    <div className="flex flex-col">
      {notes.map((note) => (
        <Nota
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  )
}

export default Notas
