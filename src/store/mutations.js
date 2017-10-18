import { loadCollection } from '../database'

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
  }
}
