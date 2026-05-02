"use client";

// Components & UI
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// Constants & Variables
const QNAS = [
	{
		"id": "wreO7qtMYxGdXvhadyYY",
		"question": "Are there any miscellaneous points to note about the event?",
		"tags": [
			"競賽內容"
		],
		"answer": "The key trends for 2022 revolve around sustainability, digital transformation, and a focus on customer-centric approaches. With the rise of artificial intelligence and machine learning, companies are looking to leverage these technologies for better customer experiences."
	},
	{
		"id": "aUsyFn9DuSG94i7fhTR6",
		"question": "Can you provide details about the registration process?",
		"answer": "Yes, participants are advised to regularly check the event website for updates and to adhere to the deadlines.",
		"tags": [
			"其他",
			"2022",
			"競賽內容"
		]
	},
	{
		"id": "3opCBtnv0s3LsawncCjf",
		"question": "What are the key trends you see in the market for 2022?",
		"tags": [
			"競賽內容"
		],
		"answer": "Technology is expected to evolve at an even faster pace. We're anticipating major breakthroughs in quantum computing, augmented reality, and sustainable technologies.\nThe key trends for 2022 revolve around sustainability, digital transformation, and a focus on customer-centric approaches. With the rise of artificial intelligence and machine learning, companies are looking to leverage these technologies for better customer experiences."
	},
	{
		"id": "NjEiUdWHUG2sOd8nj9d9",
		"question": "團隊在比賽中通常面臨哪些挑戰？",
		"tags": [
			"競賽內容"
		],
		"answer": "報名過程包括填寫在線表格、提交必要的文件和支付報名費。建議在申請前仔細閱讀指南。\n預計技術將以更快的速度發展。我們預期在量子計算、增強現實和可持續技術方面將取得重大突破。"
	},
	{
		"id": "QFjt8zjf2Q5WE3UfhYbe",
		"question": "您能提供有關報名過程的詳細信息嗎？",
		"answer": "預計技術將以更快的速度發展。我們預期在量子計算、增強現實和可持續技術方面將取得重大突破。",
		"tags": [
			"創客組",
			"報名相關"
		]
	},
	{
		"id": "yjMS8M6d6AOoysnFUzTq",
		"question": "明天早餐吃什麼?",
		"answer": "深入的探討早餐，是釐清一切的關鍵。早餐對我來說，已經成為了我生活的一部分。馬克思曾經說過，一切節省，歸根到底都歸結為時間的節省。這段話看似複雜，其中的邏輯思路卻清晰可見。\n就我個人來說，早餐對我的意義，不能不說非常重大。拿破崙講過一句值得人反覆尋思的話，強將手下無弱兵。這把視野帶到了全新的高度。帶著這些問題，我們一起來審視早餐。由於，早餐勢必能夠左右未來。在人生的歷程中，早餐的出現是必然的。那麼，若發現問題比我們想像的還要深奧，那肯定不簡單。面對如此難題，我們必須設想周全。對於一般人來說，早餐究竟象徵著什麼呢？毛佛魯說過，才能自然形成，性格則涉人世之風。希望大家實際感受一下這段話。若沒有早餐的存在，那麼後果可想而知。蘇軾在過去曾經講過，水枕能令山俯仰，風船解與月徘徊。這影響了我的價值觀。",
		"tags": [
			"eat",
			"philosophy"
		]
	}
];



export default function QnaAccordion() {
	return (
		<Accordion type="multiple" collapsible="true">
			{QNAS.map(qa => (
				<AccordionItem key={qa.id} value={qa.id}>
					<AccordionTrigger>
						<span className="text-left text-balance">
							<span className="text-primary-gradient font-bold">Q: </span>
							{qa.question}
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<div className="neu-pressed-md rounded-[2rem] p-8">
							<p className="whitespace-pre-line">
								{qa.answer}
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}