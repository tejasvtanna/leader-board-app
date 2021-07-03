import classes from './AddLeader.module.css'

interface Props {
  onAddLeader: (name: string) => {}
}

const AddLeader = ({ onAddLeader }: Props) => {

  const handleAddLeader = () => {
    const name = prompt('Enter new leader name')?.trim()
    if(!name) return
    onAddLeader(name)
  }

  return (
    <div className={classes.addLeader}>
      <button className={classes.addBtn} onClick={handleAddLeader}>
        Add Leader
      </button>
    </div>
  )
}

export default AddLeader
