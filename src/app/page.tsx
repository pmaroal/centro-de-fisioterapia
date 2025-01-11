'use client'
import Notas from './components/organisms/notes'
import UpdateNoteForm from './components/molecules/updateNoteForm'
import AddSection from './components/organisms/addSection'
import DeleteNoteForm from './components/molecules/deleteNoteForm'
import { useEffect, useState } from 'react'
import { Note } from '@/types/note'

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]) // Especificar que es un array de notas
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Función para cargar las notas desde la API
  const fetchNotes = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`)
      if (!response.ok) throw new Error('Failed to fetch notes')
      const data = await response.json()
      setNotes(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  // Funciones para actualizar el estado
  const addNote = (newNote: Note) => setNotes((prev) => [...prev, newNote])
  const updateNote = (updatedNote: Note) =>
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    )
  const deleteNote = (id: number) =>
    setNotes((prev) => prev.filter((note) => note.id !== id))

  // Cargar las notas al montar el componente
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="scrollbar-hidden flex h-screen overflow-y-scroll">
      {/* Listado de Notas */}
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="mb-4 text-center text-2xl font-bold">Notes 🗒️</h1>
        <AddSection addNote={addNote} />
        <Notas />
      </div>
      <DeleteNoteForm deleteNote={deleteNote} />

      <UpdateNoteForm updateNote={updateNote} />
    </div>
  )
}
