"use client";
import { useState } from "react";
import Link from "next/link";
// TODO: Remove temporary images
import Nene from "/public/imgs/luna.webp";

// SWR
import useSWR from "swr";
import { fetcher } from "@/lib/fetch";

// Components & UI
import { NeuCard } from "@/components/main/common/card";
import { NeuPagination } from "@/components/main/common/pagination";
import { Skeleton } from "@/components/ui/skeleton";



export default function TeamList() {
	const { data, isLoading, error } = useSWR("teams", fetcher);
	const teams = data || [];

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, _setItemsPerPage] = useState(15);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentData = teams.slice(startIndex, endIndex);

	return (
		<div>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-16 justify-items-center place-items-stretch">
				{!error && (
					isLoading ? (
						Array.from({ length: 6 }).map((_, index) => (
							<Skeleton key={index} className="w-full h-[36rem] rounded-[2rem]" />
						))
					) : (currentData?.map((team, index) => (
						<li key={team.id}>
							<Link href={`/teams/${team.id}`}>
								<NeuCard
									className="h-full active:neu-pressed-md"
									size="sm"
									axis="y"
									imgSrc={team.coverImgUrl || Nene}
									imgAlt=""
									priority={index < 3}
									title={team.title}
									description={team.teamName}
									badge={`${team.year} ${team.group}`}
									content={team.introduction}
									centerHeader={false}
									lineClamp
									showBadge
									showDesc
								/>
							</Link>
						</li>
					)))
				)}
			</ul>
			{teams && (
				<NeuPagination
					totalItems={teams.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
}