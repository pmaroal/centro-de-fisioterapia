'use client'
import React, { useState, useEffect } from 'react'
import Notas from './components/organisms/notes'
import UpdateNoteForm from './components/molecules/updateNoteForm'

interface Note {
  id: number
  title: string
  content: string
}

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Cargar notas desde la base de datos al montar el componente
  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/notes`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        if (!response.ok) {
          const errorData = await response.json().catch(() => null)
          throw new Error(errorData?.message || 'Failed to fetch notes')
        }

        const data: Note[] = await response.json()
        setNotes(data)
      } catch (err: unknown) {
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotes()
  }, [])

  return (
    <div className="flex h-screen">
      {/* Listado de Notas */}
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Notes</h1>
        {isLoading ? (
          <p>Loading notes...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <Notas />
        )}
      </div>

      {/* Formulario de Actualización */}
      <div className="fixed right-0 top-0 h-full w-1/3 bg-indigo-950 p-4 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Update a Note</h2>
        <UpdateNoteForm
          onUpdate={async (id, fields) => {
            try {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`,
                {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(fields),
                },
              )

              if (!response.ok) {
                throw new Error('Failed to update the note')
              }

              const updatedNote = await response.json()
              setNotes((prevNotes) =>
                prevNotes.map((note) =>
                  note.id === id ? { ...note, ...updatedNote } : note,
                ),
              )
            } catch (err: unknown) {
              console.error('Error updating note:', err)
            }
          }}
        />
      </div>
    </div>
  )
}
