import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL, 
        lat REAL NOT NULL,
        lng REAL NOT NULL                
    )`,
        [],
        () => {
          resolve()
        },
        (_, error) => {
          reject(error)
        }
      );
    });
  });
}
export const insertPlace = (place) => {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(`INSERT INTO places (title, imageUri, lat, lng) VALUES (?,?,?,?)`,
        [place.title, place.image, place.location.lat, place.location.lng],
        (_, result) => {
          console.log(result)
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      );
    })
  });
}
