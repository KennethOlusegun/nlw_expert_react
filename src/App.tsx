import logo from "./assets/Logo.svg";
import { NewNoteCard } from "./compponents/new-note-card";
import { NoteCard } from "./compponents/note-card";

const note = {
	date: new Date(),
	content:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum inventore facere fugiat amet debitis sint sapiente at nihil sequi nemo sed placeat rem eos minus perferendis voluptas, totam aspernatur eveniet!",
};

export function App() {
	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6">
			<img src={logo} alt="NLW Expert" />

			<form className="w-full">
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
				/>
			</form>

			<div className="h-px bg-slate-700" />

			<div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
				<NewNoteCard />
				<NoteCard note={note} />
			</div>
		</div>
	);
}
