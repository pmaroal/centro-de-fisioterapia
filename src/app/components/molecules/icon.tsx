import AddIcon from '../svg/add'
import DeleteIcon from '../svg/delete'
import UpdateIcon from '../svg/update'

interface IconProps {
  type: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ type, className }) => {
  switch (type) {
    case 'delete':
      return <DeleteIcon className={className} />
    case 'update':
      return <UpdateIcon className={className} />
    case 'add':
      return <AddIcon className={className} />
    default:
      return null
  }
}
