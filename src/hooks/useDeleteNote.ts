import { useState } from 'react'

export const useDeleteNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const deleteNote = async (id: number): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`,
        {
          method: 'DELETE',
        },
      )

      if (!response.ok) throw new Error('Failed to delete note')
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteNote, isLoading, error }
}
