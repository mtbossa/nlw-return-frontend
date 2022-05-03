import CloseButton from "./CloseButton";

export default function WidgetForm() {
	return (
		<div className="relative flex flex-col items-center p-4 mb-4 shadow-lg bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>
				<CloseButton />
			</header>

			<p>hello world</p>

			<footer className="text-xs text-neutral-400">
				Feito com {"<3"} pela{" "}
				<a
					href="https://www.rocketseat.com.br"
					className="underline underline-offset-2"
				>
					Rocketseat
				</a>
			</footer>
		</div>
	);
}
