import Triangle from '../assets/Triangle.png'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Formulário
type PitagorasForm = {
  catetoA: number
  catetoB: number
}

const Layout: React.FC = () => {
  // Validações dos campos do formulário
  const validations = Yup.object().shape({
    catetoA: Yup.number().required('Preencha o cateto A').moreThan(0),
    catetoB: Yup.number().required('Preencha o cateto B').moreThan(0)
  })

  // Eventos
  const { register, handleSubmit, reset } = useForm<PitagorasForm>({
    resolver: yupResolver(validations)
  })

  // Função de cálculo da hipotenusa
  const calcularHipotenusa = (form: PitagorasForm) => {
    return Math.sqrt(Math.pow(form.catetoA, 2) + Math.pow(form.catetoB, 2))
  }

  // Função que captura evento de submissão do formulário
  const onSubmit = (form: PitagorasForm) => {
    //TODO: Atribuir resultado a uma varoável para exibi-lo em tela
    console.log(calcularHipotenusa(form))
  }

  return (
    <div>
      <h1> Pythagorean Theorem Calculator</h1>
      <img src={Triangle} alt="Triangle" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Cateto A</label>
          <input {...register('catetoA')} type="number" />
        </div>
        <div>
          <label>Cateto B</label>
          <input {...register('catetoB')} type="number" />
        </div>
      </form>

      <div>
        <button type="submit">Resultado</button>
      </div>
      <div>
        <button onClick={() => reset()}>Limpar</button>
      </div>
    </div>
  )
}

export default Layout
