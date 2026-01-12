CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL,
	"updated" timestamp
);
--> statement-breakpoint
CREATE TABLE "posts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "posts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" integer NOT NULL,
	"description" text,
	"price" integer NOT NULL,
	"image" text NOT NULL,
	"owner" integer NOT NULL,
	"status" varchar(255) NOT NULL,
	"product" integer NOT NULL,
	"category" integer NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL,
	"updated" timestamp
);
--> statement-breakpoint
CREATE TABLE "topProducts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "topProducts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"size" varchar(255) NOT NULL,
	"colour" varchar(255) NOT NULL,
	"material" varchar(255),
	"state" smallint NOT NULL,
	"brand" varchar(255),
	"gender" smallint NOT NULL,
	"tags" varchar(255)[],
	"created" timestamp DEFAULT now() NOT NULL,
	"updated" timestamp
);
--> statement-breakpoint
CREATE TABLE "bottomProducts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "bottomProducts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"size" integer NOT NULL,
	"colour" varchar(255) NOT NULL,
	"material" varchar(255),
	"state" smallint NOT NULL,
	"brand" varchar(255),
	"gender" smallint NOT NULL,
	"tags" varchar(255)[],
	"created" timestamp DEFAULT now() NOT NULL,
	"updated" timestamp
);
