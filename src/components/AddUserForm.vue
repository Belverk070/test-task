<template>
  <el-form :label-position="labelPosition" label-width="100px" style="max-width: 460px">
    <el-form-item label="Имя">
      <el-input v-model="name" placeholder="Введите имя" type="text" />
    </el-form-item>

    <el-form-item label="Телефон">
      <el-input v-model="number" placeholder="Введите номер телефона" type="tel" />
    </el-form-item>

    <el-form-item label="Начальник">
      <el-select v-model="userParent" class="m-2" placeholder="Выберите начальника">
        <el-option
          v-for="item in userParentOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-button type="primary" round @click="$emit('closeDialog')">Отмена</el-button>
    <el-button type="primary" :disabled="isDisabled" round @click="saveData">
      Подтвердить
    </el-button>
  </el-form>
</template>

<script>
export default {
  name: 'AddUserForm',

  data: () => ({
    id: null,
    name: null,
    number: null,
    userParent: null,
    labelPosition: 'left',
    parents: [],
  }),

  methods: {
    saveData() {
      const item = {
        id: Date.now(),
        name: this.name,
        number: this.number,
        ...(this.userParent && {
          parent: [this.parents.find((parent) => parent.id === this.userParent)],
        }),
      };

      this.$store.commit('addNewItem', item);
      localStorage.setItem('items', JSON.stringify(this.$store.state.items));
      this.parents.push(item);

      this.name = null;
      this.number = null;
      this.userParent = null;
      this.$emit('closeDialog');
    },
  },

  created() {
    this.parents = JSON.parse(localStorage.getItem('items')) || [];
  },

  computed: {
    isDisabled() {
      return this.name === null || this.number === null;
    },
    userParentOptions() {
      return this.parents
        ? this.parents.map((item) => ({
          value: item.id,
          label: item.name,
        }))
        : [];
    },
  },
};
</script>
