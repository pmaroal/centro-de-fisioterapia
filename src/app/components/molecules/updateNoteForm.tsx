'use client'
import { useUpdateNote } from '@/hooks/useUpdateNote'
import { Note } from '@/types/note'
import React, { useState } from 'react'

interface UpdateNoteFormProps {
  updateNote: (note: Note) => void
}

export default function UpdateNoteForm({ updateNote }: UpdateNoteFormProps) {
  const { updateNote: updateAPI, isLoading, error } = useUpdateNote()
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id.trim()) {
      alert('Please provide the note ID to update.')
      return
    }
    const noteId = parseInt(id.trim())
    const updatedFields = {
      ...(title && { title }),
      ...(content && { content }),
    }
    const updatedNote = await updateAPI(noteId, updatedFields)
    if (updatedNote) {
      updateNote(updatedNote) // Actualizar el estado en HomePage
      setId('')
      setTitle('')
      setContent('')
      alert('Note updated successfully')
    }
  }
  return (
    <div className="fixed right-0 top-12 h-full w-1/3 max-w-96 rounded p-4">
      <h2 className="ml mb-4 text-lg font-bold">Update Note</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="id" className="block font-medium">
            Note ID
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full rounded border p-2 text-black"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-medium">
            New Title (optional)
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border p-2 text-black"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            New Content (optional)
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded border p-2 text-black"
            rows={5}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Note'}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
    </div>
  )
}
