'use client'

import { useState } from 'react'
import { useCreateNote } from '@/hooks/useCreateNote'

export default function Home() {
  const { createNote, isLoading, error } = useCreateNote()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createNote({ title, content })
    setTitle('')
    setContent('')
    alert('Nota creada exitosamente')
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome to the To Do List App
      </h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="m-2 border-2 border-gray-300 p-2 text-black"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="m-2 border-2 border-gray-300 p-2 text-black"
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className="m-2 rounded bg-blue-500 p-2 text-white"
          >
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </form>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </main>
  )
}
