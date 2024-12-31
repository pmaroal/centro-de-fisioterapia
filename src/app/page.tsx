'use client'
import React, { useState, useEffect } from 'react'
import { useUpdateNote } from '@/hooks/useUpdateNote'
import Notas from './components/organisms/notes'
import UpdateNoteForm from './components/molecules/updateNoteForm'

export default function HomePage() {
  const [notes, setNotes] = useState([])
  const { updateNote, isLoading, error } = useUpdateNote()

  // Cargar notas desde la base de datos al montar el componente
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes')
        const data = await response.json()
        setNotes(data)
      } catch (err) {
        console.error('Error fetching notes:', err)
      }
    }

    fetchNotes()
  }, [])

  // Manejar la actualización de una nota
  const handleUpdate = async (
    id: number,
    fields: { title?: string; content?: string },
  ) => {
    await updateNote(id, fields)
    // Recargar notas después de la actualización
    const response = await fetch('/api/notes')
    const updatedNotes = await response.json()
    setNotes(updatedNotes)
  }

  return (
    <div className="flex h-screen">
      {/* Listado de Notas */}
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Notes</h1>
        <Notas />
      </div>

      {/* Formulario de Actualización */}
      <div className="fixed right-0 top-0 h-full w-1/3 bg-gray-100 p-4 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Update a Note</h2>
        <UpdateNoteForm onUpdate={handleUpdate} />
        {isLoading && <p>Updating note...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </div>
    </div>
  )
}
