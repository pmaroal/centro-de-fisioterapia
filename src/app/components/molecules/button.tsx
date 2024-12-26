import AddIcon from '../svg/add'
import DeleteIcon from '../svg/delete'
import UpdateIcon from '../svg/update'

export interface ButtonProps {
  type: 'add' | 'delete' | 'update' // Solo permite estos valores
  className?: string
  isLoading?: boolean
  onClick?: () => void
}

export default function Button({
  type,
  className = '',
  isLoading = false,
  onClick,
}: ButtonProps) {
  // Objeto de configuración definido dentro del componente
  const buttonConfig = {
    add: {
      text: 'Add',
      icon: AddIcon,
    },
    delete: {
      text: 'Delete',
      icon: DeleteIcon,
    },
    update: {
      text: 'Update',
      icon: UpdateIcon,
    },
  }

  const config = buttonConfig[type] // Obtiene el texto e ícono según el tipo
  const IconComponent = config.icon

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={onClick}
      className={`m-2 flex flex-row-reverse items-center justify-center gap-2 rounded bg-blue-500 p-2 text-white ${className}`}
    >
      {/* Renderiza el ícono */}
      <IconComponent className="h-5 w-5" />
      {/* Renderiza el texto según el estado */}
      {isLoading ? 'Loading...' : config.text}
    </button>
  )
}
