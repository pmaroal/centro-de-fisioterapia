interface NotaProps {
  id: number
  title: string
  content: string
}

const Nota: React.FC<NotaProps> = ({ id, title, content }) => {
  return (
    <div className="flex justify-between gap-4 rounded border p-4 shadow">
      <div className="flex items-center gap-4">
        <h3>{id}</h3>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default Nota
