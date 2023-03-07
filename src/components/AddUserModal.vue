<template>
  <el-dialog
  v-model="isOpen"
  title="Добавить нового пользователя"
  width="30%"
  >
    <add-user-form
    @closeDialog="closeDialog" />
  </el-dialog>
</template>

<script>
import AddUserForm from './AddUserForm.vue';

export default {
  name: 'AddUserModal',

  components: { AddUserForm },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    isOpen: {
      get() {
        return this.$props.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      },
    },
  },

  methods: {
    closeDialog() {
      this.isOpen = false;
    },
  },
};
</script>
