export type AboutCompetitionSystem = {
	type: string;
	title: string;
	description: string;
};

export type AboutTopic = {
	title: string;
	company: string;
	description: string;
	pdfUrl?: string;
};

export type AboutSponsor = {
	group: string;
	companies: string[];
};

export type AboutStaff = {
	dept: string;
	members: string[];
};

export type AboutScenes = {
	description: string;
	imgUrls: string[];
};