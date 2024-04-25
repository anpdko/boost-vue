<template>
  <div v-if="editor">
    <div class="box-list">
      <ul class="list">
        <li @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          <i class="bi bi-type-h1"></i>
        </li>
        <li @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          <i class="bi bi-type-h2"></i>
        </li>
        <li @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          <i class="bi bi-type-h3"></i>
        </li>
        <li @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
          <i class="bi bi-paragraph"></i>
        </li>
        <li @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          <i class="bi bi-type-bold"></i>
        </li>
        <li @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          <i class="bi bi-type-italic"></i>
        </li>
        <li @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
          <i class="bi bi-type-strikethrough"></i>
        </li>
        <li @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
          <i class="bi bi-text-left"></i>
        </li>
        <li @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
          <i class="bi bi-text-center"></i>
        </li>
        <li @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
          <i class="bi bi-text-right"></i>
        </li>
        <li @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
          <i class="bi bi-justify"></i>
        </li>
        <li @click="addImage"><i class="bi bi-image"></i></li>
      </ul>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'

import { Editor, EditorContent } from '@tiptap/vue-3'

export default defineComponent({
  components: {
    EditorContent,
  },
  
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null as any,
    }
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },
  methods: {
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({
          placeholder: 'Напиши пост …'
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
})
</script>

<style scoped lang="scss">

.box-list{
  position: sticky;
  top: 0px;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list{
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0 5px 0;
  padding: 10px;
  gap: 3px;

  li{
    list-style: none;
    padding:  0 10px;
    border: 2px solid gray;
    border-radius: 2px;
    cursor: pointer;
    user-select: none; 
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  li:first-of-type{
    border-radius: 10px 2px 2px 10px;
  }
  li:last-of-type{
    border-radius: 2px 10px 10px 2px;
  }
  li.is-active{
    background-color: #2c2c2c;
    border: 2px solid #2c2c2c;
    color: white;
  }
  li:hover{
    border: 2px solid #2c2c2c;
  }
}
</style>