'use client'
import React, { useState } from 'react'

interface UpdateNoteFormProps {
  onUpdate: (id: number, fields: { title?: string; content?: string }) => void
}

const UpdateNoteForm: React.FC<UpdateNoteFormProps> = ({ onUpdate }) => {
  const [id, setId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!id.trim()) {
      alert('Please provide the note ID to update.')
      return
    }

    const noteId = parseInt(id.trim())
    const updatedFields: { title?: string; content?: string } = {}

    if (title.trim()) updatedFields.title = title.trim()
    if (content.trim()) updatedFields.content = content.trim()

    onUpdate(noteId, updatedFields)

    // Limpiar el formulario después de enviar
    setId('')
    setTitle('')
    setContent('')
  }

  return (
    <div className="rounded bg-indigo-900 p-4 shadow">
      <h2 className="mb-4 text-lg font-bold">Update Note</h2>
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
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Update Note
        </button>
      </form>
    </div>
  )
}

export default UpdateNoteForm
