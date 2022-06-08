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

/* Functions Definition */
CREATE OR REPLACE FUNCTION fn_GetTipFromClient (cid INTEGER, tid INTEGER)
RETURNS TABLE (
	client_id INTEGER,
	tip_id INTEGER,
	body VARCHAR(240),
  fullname VARCHAR(40),
	nickname VARCHAR(40),
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
      C.fullname AS fullname,
			C.nickname AS nickname,
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

CREATE OR REPLACE FUNCTION fn_GetAllTipsFromClient(cid INTEGER)
RETURNS TABLE (
	client_id INTEGER,
	tip_id INTEGER,
	body VARCHAR(240),
  fullname VARCHAR(40),
	nickname VARCHAR(40),
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
      C.fullname AS fullname,
			C.nickname AS nickname,
			T.created AS created
		FROM Tip T
		JOIN Client C
			ON T.fk_client_id = C.pk_client_id
		WHERE C.pk_client_id = cid;
END;
$$;
