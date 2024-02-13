import Logo from './assets/Logo.svg'

export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12">
		<img src={Logo} alt="Nlw Expert"/>

		<form>
			<input
			 type="text"
			 placeholder="Busque suas notas..."
			 className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"/>
		</form>
	</div>
  )
}