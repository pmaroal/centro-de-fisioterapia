import { useState } from 'react'

export const useUpdateNote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateNote = async (
    id: number,
    updatedFields: { title?: string; content?: string },
  ): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFields),
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to update note: ${response.statusText}`)
      }

      console.log('Note updated successfully')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return { updateNote, isLoading, error }
}
