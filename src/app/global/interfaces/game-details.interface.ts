interface Minimum_system_requirement {
	os: string;
	processor: string;
	memory: string;
	graphics: string;
	storage: string;
}

interface Screenshot {
	id: number;
	image: string;
}

export interface GameDetail {
	id: number;
	title: string;
	thumbnail: string;
	status: string;
	short_description: string;
	description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	minimum_system_requirements: Minimum_system_requirement;
	screenshots: Screenshot[];
}