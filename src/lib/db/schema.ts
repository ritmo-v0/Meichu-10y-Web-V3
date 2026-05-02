import {
	pgTable,
	integer,
	jsonb,
	serial,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

// Types & Interfaces
import type { TeamMember } from "@/lib/team/types";
import type {
	AboutCompetitionSystem,
	AboutScenes,
	AboutSponsor,
	AboutStaff,
	AboutTopic,
} from "@/lib/about/types";



// Schema
export const abouts = pgTable("abouts", {
	year: integer("year").notNull().primaryKey(),
	summary: text("summary").notNull().default(""),
	description: text("description").notNull().default(""),
	bannerUrl: text("banner_url"),
	logoUrl: text("logo_url"),
	scenes: jsonb("scenes")
		.$type<AboutScenes>()
		.notNull()
		.default({ description: "", imgUrls: [] }),
	competition: jsonb("competition")
		.$type<{ systems: AboutCompetitionSystem[] }>()
		.notNull()
		.default({ systems: [] }),
	topics: jsonb("topics")
		.$type<AboutTopic[]>()
		.notNull()
		.default([]),
	sponsors: jsonb("sponsors")
		.$type<AboutSponsor[]>()
		.notNull()
		.default([]),
	staffs: jsonb("staffs")
		.$type<AboutStaff[]>()
		.notNull()
		.default([]),
});

export const teams = pgTable("teams", {
	id: text("id").primaryKey(),
	index: serial("index").notNull(),
	year: integer("year").notNull(),
	group: text("group").notNull(),
	teamName: text("team_name").notNull(),
	teamDescription: text("team_description"),
	title: text("title").notNull(),
	introduction: text("introduction").notNull(),
	email: text("email").notNull(),
	coverImgUrl: text("cover_img_url"),
	pdfUrl: text("pdf_url"),
	relatedUrls: text("related_urls").array().notNull().default([]),
	tags: text("tags").array().notNull().default([]),
	awards: text("awards").array().notNull().default([]),
	members: jsonb("members")
		.$type<TeamMember[]>()
		.notNull()
		.default([]),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});