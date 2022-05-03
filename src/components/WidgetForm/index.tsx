import CloseButton from "../CloseButton";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			source: bugImageUrl,
		},
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImageUrl,
		},
	},
	OTHER: {
		title: "Outro",
		image: {
			source: thoughtImageUrl,
		},
	},
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
	const [selectedFeedback, setSelectedFeedback] = useState<FeedbackType | null>(
		null
	);

	function handleRestartFeedback() {
		setSelectedFeedback(null);
	}

	return (
		<div className="relative flex flex-col items-center p-4 mb-4 shadow-lg bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
			{!selectedFeedback ? (
				<FeedbackTypeStep onFeedbackTypeChanged={setSelectedFeedback} />
			) : (
				<FeedbackContentStep
					feedbackType={selectedFeedback}
					onFeedbackRestartRequested={handleRestartFeedback}
				/>
			)}

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
