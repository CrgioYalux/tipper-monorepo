/* Tables Definition */
CREATE TABLE Client(
	pk_client_id SERIAL PRIMARY KEY,
	nickname VARCHAR(40) UNIQUE NOT NULL,
  	fullname VARCHAR(40) NOT NULL,
	email VARCHAR(50) NOT NULL,
	hash VARCHAR(128) NOT NULL,
 	salt VARCHAR(32) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ClientProfile(
	fk_client_id INTEGER NOT NULL,
	biography VARCHAR(240),
	date_of_bith DATE NOT NULL,
	FOREIGN KEY (fk_client_id) REFERENCES Client (pk_client_id)
);

CREATE TABLE Tip(
	pk_tip_id SERIAL PRIMARY KEY,
	fk_client_id INTEGER NOT NULL,
	body VARCHAR(240) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (fk_client_id) REFERENCES Client (pk_client_id)
);

CREATE TABLE TipReaction(
	pk_tip_reaction_id SERIAL PRIMARY KEY,
	fk_tip_id INTEGER NOT NULL,
	times_liked INTEGER,
	times_disliked INTEGER,
	FOREIGN KEY (fk_tip_id) REFERENCES TIP (pk_tip_id)
);

CREATE TABLE TipComment(
	fk_from_client_id INTEGER NOT NULL,
	fk_to_client_id INTEGER NOT NULL,
	fk_from_tip_id INTEGER NOT NULL,
	fk_to_tip_id INTEGER NOT NULL,
	FOREIGN KEY (fk_from_client_id) REFERENCES CLIENT (pk_client_id),
	FOREIGN KEY (fk_to_client_id) REFERENCES CLIENT (pk_client_id),
	FOREIGN KEY (fk_from_tip_id) REFERENCES TIP (pk_tip_id),
	FOREIGN KEY (fk_to_tip_id) REFERENCES TIP (pk_tip_id)
);
