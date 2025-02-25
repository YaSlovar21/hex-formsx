CREATE TABLE "crm_order" 
(
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content_text" text NOT NULL,
    "client_id" integer NOT NULL REFERENCES "crm_client" ("id"),
    "manager_id" integer NOT NULL REFERENCES "crm_managerofclient" ("id"),
    "date_add" date NOT NULL,
    "status" varchar(10) NOT NULL,
    "dt_last_change" datetime NOT NULL,
    "quantity" varchar(10) NOT NULL
);

CREATE TABLE "crm_managerofclient"
(
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(50) NOT NULL,
    "email" varchar(254) NOT NULL,
    "thumb" varchar(100) NOT NULL,
    "client_id" integer NOT NULL REFERENCES "crm_client" ("id"),
    "note" varchar(50) NOT NULL,
    "role" varchar(80) NOT NULL,
    "mob_tel" varchar(30) NOT NULL,
    "telephone" varchar(30) NOT NULL
 );

 CREATE TABLE "crm_floworder" 
 (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "date_of_flow" date NOT NULL, 
    "status_old" varchar(15) NOT NULL, 
    "status_new" varchar(15) NOT NULL, 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id"), 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id")
);

CREATE TABLE "crm_tag" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "name" varchar(10) NOT NULL
);

CREATE TABLE "crm_staffperson" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "email" varchar(254) NOT NULL, 
    "name" varchar(60) NOT NULL, 
    "last_name" varchar(60) NOT NULL, 
    "thumb_staff" varchar(100) NOT NULL, 
    "user_admin_id" integer NOT NULL UNIQUE REFERENCES "auth_user" ("id")
)

CREATE TABLE "crm_resolutiondeny" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "date_of_resolution" date NOT NULL, 
    "resolution_text" text NOT NULL, 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id"), 
    "resolution_reason" varchar(15) NOT NULL
)

CREATE TABLE "crm_ordersundercontrol" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "date_attention" date NOT NULL, 
    "date_deadline" datetime NOT NULL, 
    "ordercontrol_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "staff_id" integer NOT NULL REFERENCES "auth_user" ("id")
)

CREATE TABLE "crm_order_tags" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "tag_id" integer NOT NULL REFERENCES "crm_tag" ("id")
)

CREATE TABLE "crm_order_followers" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id")
)

CREATE TABLE "crm_fileorder" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "upload" varchar(100) NOT NULL, 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "type_of_file" varchar(50) NOT NULL, 
    "is_global" bool NOT NULL
)

CREATE TABLE "crm_commentsorder_followers_to_read" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "commentsorder_id" integer NOT NULL REFERENCES "crm_commentsorder" ("id"), 
    "user_id" integer NOT NULL REFERENCES "auth_user" ("id")
)

CREATE TABLE "crm_commentsorder" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "comment_text" text NOT NULL, 
    "order_id" integer NOT NULL REFERENCES "crm_order" ("id"), 
    "author_of_comment_id" integer NOT NULL REFERENCES "auth_user" ("id"), 
    "date_add" date NOT NULL, 
    "type_of_comment" varchar(14) NOT NULL
)

CREATE TABLE "crm_client" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "name_of_client" varchar(50) NOT NULL, 
    "inn" bigint NOT NULL, 
    "thumb" varchar(100) NOT NULL, 
    "central_email" varchar(254) NOT NULL, 
    "tel" varchar(30) NOT NULL, 
    "note" text NOT NULL, 
    "who_is" varchar(14) NOT NULL
)