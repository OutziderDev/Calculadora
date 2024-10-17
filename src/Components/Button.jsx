const Button = (props) => {
    return(
      <button className='bg-slate-200 rounded hover:bg-slate-400 active:translate-y-0.5'>{props.valor}</button>
    )
}

export default Button;
