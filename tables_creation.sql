CREATE TABLE Client(
	pk_client_id SERIAL PRIMARY KEY,
	nickname VARCHAR(26) UNIQUE NOT NULL,
	firstname VARCHAR(26) NOT NULL,
	lastname VARCHAR(26) NOT NULL,
	email VARCHAR(40) NOT NULL,
	hash VARCHAR(128) NOT NULL,
  salt VARCHAR(32) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tip(
	pk_tip_id SERIAL PRIMARY KEY,
	fk_client_id INTEGER NOT NULL,
	body VARCHAR(240) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (fk_client_id) REFERENCES Client (pk_client_id)
);

CREATE TABLE Tip_reaction(
	pk_tip_reaction_id SERIAL PRIMARY KEY,
	fk_tip_id INTEGER NOT NULL,
	times_liked INTEGER,
	times_disliked INTEGER,
	FOREIGN KEY (fk_tip_id) REFERENCES TIP (pk_tip_id)
);

CREATE TABLE Tip_comment(
	pk_tip_comment_id SERIAL PRIMARY KEY,
	fk_tip_id INTEGER NOT NULL,
	fk_client_id INTEGER NOT NULL,
	body VARCHAR(240) NOT NULL,
	FOREIGN KEY (fk_tip_id) REFERENCES TIP (pk_tip_id),
	FOREIGN KEY (fk_client_id) REFERENCES Client (pk_client_id)
);


