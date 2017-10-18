<template lang="html">
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Ninghao Notes App _ Vue.js
    </h4>
    <a class="ui right floated basic violet button">
      添加笔记
    </a>
    <div class="ui divided items">
      <note>
      </note>
      <span
        class="ui small disabled header">
        还没有笔记，请按下 '添加笔记' 按钮。
      </span>
    </div>
  </div>
</template>

<script>
import Note from './Note'
export default {
  components: {
    Note
  }
}
</script>

<style lang="css">
</style>
