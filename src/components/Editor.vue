<template lang="html">
  <div class="ui form">
    <div class="field">
      <textarea
        rows="5"
        placeholder="写点东西..."
        v-model="entity.body"
        v-on:input="update(entity)">
      </textarea>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'update'
    ])
  },
  props: [
    'entity'
  ]
}
</script>

<style lang="css">
</style>
