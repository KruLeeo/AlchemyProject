var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE alchemists;'
var seedQuery = 'INSERT INTO alchemists (title, nick, avatar, about) VALUES ("Эдвард", "Edward", "/images/Edward.png", "Старший брат семейства Элрик, потерял руку в ходе неудачного алхимического эксперимента. Маленький рос"), ("Альфонс", "Alphonse", "/images/Alphonse.png", "Младший брат семейства Элрик, потерял тело в ходе неудачного алхимического эксперимента. Металические доспехи"), ("Винри", "Winry", "/images/winry.png", "Талантливый механик, будущая жена Эдварда")';
var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : '12345',
    database: 'ALCHEMY'
    });
    connection.connect()
    console.log("Running SQL seed...")
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })
