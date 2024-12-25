import { useEffect, useState } from 'react'

interface Note {
  id: string
  title: string
  content: string
}

export const useFetchNotes = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`)
        if (!response.ok) {
          throw new Error('Failed to fetch notes')
        }
        const data = await response.json()
        setNotes(data)
      } catch (err: unknown) {
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchNotes()
  }, [])
  return { notes, isLoading, error }
}
