import { GridColDef } from '@mui/x-data-grid';
import './Add.scss';


type Props = {
    slug:string,
    columns: GridColDef[], 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Add(props: Props) {
  return (
    <div className='add'>

        <div className="modal">
            <span className="close">
                X
            </span>
            <h1>Add new {props.slug}</h1>
        </div>

    </div>
  )
}

export default Add;