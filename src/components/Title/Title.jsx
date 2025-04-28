import './Title.css'

function Title({Ptitle , H2title , P2title}) {
  return (
    <div className='AllTitle'>
      <button className='PTitle'>{Ptitle}</button>
      <h2>{H2title}</h2>
      <p>{P2title}</p>
    </div>
  )
}

export default Title
