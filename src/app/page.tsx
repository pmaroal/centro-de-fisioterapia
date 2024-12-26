'use client'

import { useState } from 'react'
import { useCreateNote } from '@/hooks/useCreateNote'
import AddIcon from './components/svg/add'
import UpdateIcon from './components/svg/update'
import DeleteIcon from './components/svg/delete'
import { Icon } from './components/molecules/icon'
import Button from './components/molecules/button'
import AddSection from './components/organisms/addSection'

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
      <AddSection />

      {error && <p className="text-red-500">{error}</p>}
    </main>
  )
}
