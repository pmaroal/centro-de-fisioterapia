import { useState } from 'react'

interface CreateNoteDto {
  title: string
  content: string
}

export const useCreateNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createNote = async (
    note: CreateNoteDto,
  ): Promise<CreateNoteDto | null> => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      })

      if (!response.ok) {
        throw new Error('Failed to create note')
      }

      return response.json() // Devuelve la nota creada
    } catch (err: unknown) {
      setError((err as Error).message)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { createNote, isLoading, error }
}
