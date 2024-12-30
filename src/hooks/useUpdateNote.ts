'use client'

import { useState } from 'react'

export const useUpdateNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const updateNote = async (
    id: number,
    updatedFields: { title?: string; content?: string },
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      })

      if (!response.ok) throw new Error('Failed to update note')
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return { updateNote, isLoading, error }
}
