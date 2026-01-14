SELECT m.id AS id_murid, 
m.name,
p.status AS pendidikan_terakhir,
m.time_create, 
p.time_create AS time_update
FROM murid m
JOIN pendidikan p
ON p.id_murid = m.id
JOIN (
    SELECT id_murid, MAX(time_create) AS max_time
    FROM pendidikan
    GROUP BY id_murid
) last_pendidikan
ON last_pendidikan.id_murid = p.id_murid
ON last_pendidikan.max_time = p.time_create
ORDER BY m.id;