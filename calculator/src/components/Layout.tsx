import Triangle from '../assets/Triangle.png'

const Layout = () => {
  return (
    <div>
      <h1> Pythagorean Theorem Calculator</h1>
      <img src={Triangle} alt="Triangle" />
      <div>
        <input type="text" id="catA"/>
      </div>
      <div>
        <input type="text" id="catB"/>
      </div>
      <div>
        <button id="buttom">Resultado</button>
      </div>
    </div>
  )
}

export default Layout