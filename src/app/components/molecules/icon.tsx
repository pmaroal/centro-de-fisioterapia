import AddIcon from '../atoms/svg/add'
import DeleteIcon from '../atoms/svg/delete'
import UpdateIcon from '../atoms/svg/update'

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
