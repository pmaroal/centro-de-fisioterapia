'use client'

import { useState } from 'react'

export default function Home() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (error: React.FormEvent) => {
    error.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })

      if (!response.ok) {
        throw new Error('Failed to create note')
      }

      // Limpia los campos del formulario tras éxito
      setTitle('')
      setContent('')
      alert('Nota creada exitosamente')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
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
