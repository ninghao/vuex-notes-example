<template lang="html">
  <div class="item">
    <div class="meta">
      {{ 'updated' }}
    </div>
    <div class="content">
      <div class="header">
        {{ 'header' || '新建笔记' }}
      </div>
      <div class="extra">
        <editor>
        </editor>
        {{ 'words' }} 字
        <i class="right floated trash outline icon">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor'
export default {
  components: {
    Editor
  }
}
</script>

<style lang="css">
</style>
