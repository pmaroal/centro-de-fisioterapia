'use client'
import { useState, useEffect } from 'react'

interface Note {
  id: number
  title: string
  content: string
}

export const useFetchNotes = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`)
        if (!response.ok) throw new Error('Error al obtener las notas')
        const data: Note[] = await response.json()
        setNotes(data)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchNotes()
  }, [])

  return { notes, error }
}
