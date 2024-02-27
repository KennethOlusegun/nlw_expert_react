import logo from "./assets/logo.svg";
import { NewNoteCard } from "./compponents/new-note-card";
import { NoteCard } from "./compponents/note-card";
import { ChangeEvent, useState } from "react";

interface Note {
	id: string;
	date: Date;
	content: string;
}

export function App() {
	const [search, setSearch] = useState('')
	const [notes, setNotes] = useState<Note[]>(() => {
		const notesOnStorage = localStorage.getItem("notes");

		if(notesOnStorage){
			return JSON.parse(notesOnStorage);
		}

		return [];
	});

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		const query = e.target.value
		
		setSearch(query)
	}

	function onNoteCreated(content: string) {
		const newNote = {
			id: crypto.randomUUID(),
			date: new Date(),
			content,
		};

		const notesArray = [newNote, ...notes];

		setNotes(notesArray);

		localStorage.setItem("notes", JSON.stringify(notesArray));
	}

	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6">
			<img src={logo} alt="NLW Expert" />
			<form className="w-full">
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
					onChange={handleSearch}
				/>
			</form>
			<div className="h-px bg-slate-700" />

			<div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
				<NewNoteCard onNoteCreated={onNoteCreated} />

				{notes.map((note) => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</div>
	);
}
