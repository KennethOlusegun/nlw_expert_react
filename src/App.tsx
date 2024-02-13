import Logo from './assets/Logo.svg'
import NoteCard from "./compponents/note-card"

export function App() {

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
		<img src={Logo} alt="Nlw Expert"/>

		<form>
			<input
			 type="text"
			 placeholder="Busque suas notas..."
			 className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"/>
		</form>

		<div className="h-px bg-slate-700"/>

		<div className="grid grid-cols-3 auto-rows-[250px] gap-6">
			<div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative ">
				<span className="text-sm font-medium text-slate-200">
					Adicionar nota
				</span>
				<p className="text-sm leading-6 text-slate-400">
					Grave uma nota em áudio que será convertido para texto automaticamente
				</p>
				
			</div>


			<NoteCard />
			<NoteCard />
			<NoteCard />
		</div>
	</div>
  )
}