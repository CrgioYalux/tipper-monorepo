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

INSERT INTO Client
	(nickname, firstname, lastname, email, hash, salt)
VALUES
	('crgi0','sergio','pablo','sergioyalux1@gmail.com','123456789','abcdefghijkl');

INSERT INTO Tip
	(fk_client_id, body)
VALUES
	(1, 'and, yes, you guessed it right, this is another test tip');

CREATE OR REPLACE FUNCTION fn_GetTipFromClient (cid INTEGER, tid INTEGER)
RETURNS TABLE (
	client_id INTEGER,
	tip_id INTEGER,
	body VARCHAR(240),
	nickname VARCHAR(26),
	firstname VARCHAR(26),
	lastname VARCHAR(26),
	created TIMESTAMP
)
LANGUAGE plpgsql
AS
$$
BEGIN
	RETURN QUERY
		SELECT 
			C.pk_client_id AS client_id,
			T.pk_tip_id AS tip_id,
			T.body AS body,
			C.nickname AS nickname,
			C.firstname AS firstname,
			C.lastname AS lastname,
			T.created AS created
		FROM Tip T
		JOIN Client C 
			ON T.fk_client_id = C.pk_client_id
		WHERE 
			T.pk_tip_id = tid 
			AND
			C.pk_client_id = cid;	
END;
$$;

SELECT * FROM fn_GetTipFromClient(2, 3);
DROP FUNCTION fn_GetTipFromClient;

CREATE OR REPLACE FUNCTION fn_GetAllTipsFromClient(cid INTEGER)
RETURNS TABLE (
	client_id INTEGER,
	tip_id INTEGER,
	body VARCHAR(240),
	nickname VARCHAR(26),
	firstname VARCHAR(26),
	lastname VARCHAR(26),
	created TIMESTAMP
)
LANGUAGE plpgsql
AS
$$
BEGIN
	RETURN QUERY
		SELECT
			C.pk_client_id AS client_id,
			T.pk_tip_id AS tip_id,
			T.body AS body,
			C.nickname AS nickname,
			C.firstname AS firstname,
			C.lastname AS lastname,
			T.created AS created
		FROM Tip T
		JOIN Client C
			ON T.fk_client_id = C.pk_client_id
		WHERE C.pk_client_id = cid;
END;
$$;

SELECT * FROM fn_GetAllTipsFromClient(1);
DROP FUNCTION fn_GetAllTipsFromClient;