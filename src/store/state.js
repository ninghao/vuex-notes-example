import { db, loadCollection } from '../database'

loadCollection('notes')
  .then((collection) => {
    console.log(collection)
    console.log(db)
  })
