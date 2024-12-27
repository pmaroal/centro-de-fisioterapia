'use client'
import { useCreateNote } from '@/hooks/useCreateNote'
import { useState } from 'react'
import Button from '../molecules/button'

export default function AddSection() {
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

        <Button type="add" onClick={() => console.log('Add clicked')} />
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
