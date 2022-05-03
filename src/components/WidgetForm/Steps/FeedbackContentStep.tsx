import { ArrowLeft, Camera } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackContentStepProps {
	feedbackType: FeedbackType;
	onFeedbackRestartRequested: () => void;
}

export default function FeedbackContentStep({
	feedbackType,
	onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [comment, setComment] = useState("");
	const feedbackTypeInfo = feedbackTypes[feedbackType];

	function handleSubmitFeedback(event: FormEvent) {
		event.preventDefault();
		console.log({ screenshot, comment });
	}

	return (
		<>
			<header>
				<button
					className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
					type="button"
					onClick={() => onFeedbackRestartRequested()}
				>
					<ArrowLeft weight="bold" className="w-4 h-4"></ArrowLeft>
				</button>

				<span className="flex items-center gap-2 text-xl leading-6">
					<img className="w-6 h-6" src={feedbackTypeInfo.image.source} />
					{feedbackTypeInfo.title}
				</span>
				<CloseButton />
			</header>

			<form className="w-full my-4" onSubmit={handleSubmitFeedback}>
				<textarea
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
					placeholder="Conte com detalhes o que está acontecendo"
					onChange={event => setComment(event.target.value)}
				/>

				<footer className="flex gap-2 mt-2">
					<ScreenshotButton
						screenshot={screenshot}
						onScreenshotTook={setScreenshot}
					/>

					<button
						className="flex items-center justify-center flex-1 p-2 transition-colors border-transparent rounded-md bg-brand-500 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-300 disabled:opacity-50 disabled:hover:bg-brand-500"
						type="submit"
						disabled={comment.length === 0}
					>
						Enviar feedback
					</button>
				</footer>
			</form>
		</>
	);
}
