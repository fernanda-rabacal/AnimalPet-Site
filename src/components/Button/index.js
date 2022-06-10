import './style.css'

export function Button(props){
  return(
    <button onClick={props.onClick} className={props.className}>
      {props.value}
    </button>
  )
}