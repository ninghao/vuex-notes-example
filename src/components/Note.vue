<template lang="html">
  <div class="item">
    <div class="meta">
      {{ updated(entity) }}
    </div>
    <div class="content">
      <div class="header">
        {{ header(entity) || '新建笔记' }}
      </div>
      <div class="extra">
        <editor v-bind:entity="entity">
        </editor>
        {{ words(entity) }} 字
        <i class="right floated trash outline icon">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'updated',
      'words',
      'header'
    ])
  },
  props: [
    'entity'
  ],
  components: {
    Editor
  }
}
</script>

<style lang="css">
</style>
