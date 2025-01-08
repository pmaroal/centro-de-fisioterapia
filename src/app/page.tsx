import Notas from './components/organisms/notes'
import UpdateNoteForm from './components/molecules/updateNoteForm'
import AddSection from './components/organisms/addSection'
import DeleteNoteForm from './components/molecules/deleteNoteForm'

export default function HomePage() {
  // Cargar notas desde la base de datos al montar el componente

  return (
    <div className="scrollbar-hidden flex h-screen overflow-y-scroll">
      {/* Listado de Notas */}
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="mb-4 text-center text-2xl font-bold">Notes 🗒️</h1>
        <AddSection />
        <Notas />
      </div>
      <DeleteNoteForm />

      <UpdateNoteForm />
    </div>
  )
}
