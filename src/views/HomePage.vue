<template>
  <div class="home-page">
    <el-button type="primary" round @click="openAddUserModal"> Добавить </el-button>
    <table-data />
  </div>

  <add-user-modal v-model="isAddUserModalOpen" />
</template>

<script>
import AddUserModal from '@/components/AddUserModal.vue';
import TableData from '@/components/TableData.vue';

export default {
  name: 'HomePage',

  components: { AddUserModal, TableData },

  data: () => ({
    isAddUserModalOpen: false,
  }),

  methods: {
    openAddUserModal() {
      this.isAddUserModalOpen = true;
    },
  },
};
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
