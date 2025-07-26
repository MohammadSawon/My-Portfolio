
import './title.css'
import { Border } from '../Border/Border'
export const Titles = ({titleName}) => {
  return (
    <div>
      <h1 className='title'>{titleName}</h1>
      <Border/>
    </div>
  )
}
