<template>
  <div style="width: 100%">
    <el-table
      :data="items"
      style="width: 100%; margin-bottom: 20px"
      row-key="rowId"
      border
      :tree-props="{ children: 'parent' }"
    >
      <el-table-column prop="name" label="Имя" sortable />
      <el-table-column prop="number" label="Телефон" sortable />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableData',

  computed: {
    items() {
      return this.$store.state?.items.map((item, index) => ({
        ...item,
        rowId: index,
      })) || [];
    },
  },

  mounted() {
    const data = localStorage.getItem('items');
    if (data) {
      this.$store.state.items = JSON.parse(data);
    }
  },
};
</script>
