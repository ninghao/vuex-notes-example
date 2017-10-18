import { loadCollection, db } from '../database'

export default {
  setInitialData (state) {
    loadCollection('notes')
      .then(collection => {
        // collection.insert([
        //   { body: 'hello ~' },
        //   { body: 'hola ~' }
        // ])
        // db.saveDatabase()
        const _entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
        state.entities = _entities
      })
  },
  createEntity (state) {
    loadCollection('notes')
      .then((collection) => {
        const entity = collection.insert({
          body: ''
        })
        db.saveDatabase()
        state.entities.unshift(entity)
      })
  }
}
