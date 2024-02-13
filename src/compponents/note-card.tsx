export default function NoteCard(){
	return (
		<button className="focus-visible:ring-2 focus-visible:ring-lime-400 outline-none  text-left hover:ring-2 hover:ring-slate-600 rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative ">
				<span className="text-sm font-medium text-slate-300">
					Há 2 dias
				</span>
				<p className="text-sm leading-6 text-slate-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque ipsum similique atque debitis dolore odit quisquam dicta dignissimos vitae earum beatae quis officia inventore, deserunt, cumque sed nihil aliquid.
				</p>
				
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
		</button>
	)
}