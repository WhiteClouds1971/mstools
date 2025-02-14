<template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th class="empty-cell"></th>
          <th class="table-header">基本牌</th>
          <th class="table-header">装备牌</th>
          <th class="table-header">锦囊牌</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td :class="getCellClass(rowIndex, 0)">{{ row[0] }}</td>
          <td
            v-for="(cell, colIndex) in row.slice(1)"
            :key="colIndex + 1"
            class="cell"
            @click="handleCellClick(rowIndex, colIndex + 1)"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Vant 弹出层选择器 -->
    <van-popup v-model:show="showPopup" position="bottom">
      <van-picker
        show-toolbar
        title="选择锦囊牌"
        :columns="selectOptions"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { Popup, Picker } from 'vant';

  const tableData = reactive([
    ['♠️', '', '', ''],
    ['♦️', '', '', ''],
    ['♣️', '', '', ''],
    ['♥️', '', '', ''],
  ]);

  const showPopup = ref(false);
  const currentCell = ref({ rowIndex: null, colIndex: null });

  const jinNang = ref([
    { id: '20062f1e-5473-4d00-b79e-be89a9189059', name: '无懈可击' },
    { id: 'd5f2e78c-a5c2-4593-8fcc-1974c88614f2', name: '无中生有' },
    { id: '2afae9c4-d195-4211-9ac8-e9a4049a85f1', name: '顺手牵羊' },
    { id: 'ef6fa2ff-7db3-40c2-8c3c-29fd5992f362', name: '过河拆桥' },
    { id: '7a3e29ea-be1f-4438-8292-bfebff440d31', name: '铁索连环' },
    { id: 'd7c1aa60-18de-4119-84d8-dc4e56d72b43', name: '五谷丰登' },
    { id: 'd391ffc5-58c6-4433-b246-a3000e8d199a', name: '借刀杀人' },
    { id: '70ae2d87-ccb3-4352-9e1d-8be6800286d0', name: '桃园结义' },
    { id: 'faa4fd89-72bc-4a73-bc52-b0ebee7fe563', name: '南蛮入侵' },
    { id: '72962832-96bb-40b1-8b66-f7aa2117b2e7', name: '万剑齐发' },
    { id: 'a1f92f66-f1df-4f55-b622-43156741740b', name: '决斗' },
    { id: 'ad2c0650-937d-43e3-b8e8-8310c93ef517', name: '火攻' },
  ]);
  const selectOptions = ref(
    jinNang.value.map(item => {
      return { text: item.name, value: item.name };
    })
  );

  const handleCellClick = (rowIndex, colIndex) => {
    if (colIndex === 0) return; // 忽略列头
    currentCell.value = { rowIndex, colIndex };
    showPopup.value = true;
  };

  const onConfirm = (selected) => {
    // 从返回值中提取选中的值
    const selectedName = selected.selectedValues[0]; // 提取选中的第一个值

    // 更新表格内容
    tableData[currentCell.value.rowIndex][currentCell.value.colIndex] = selectedName;

    // 从可选项中移除
    const selectedIndex = jinNang.value.findIndex(
        (item) => item.name === selectedName
    );
    if (selectedIndex !== -1) {
      jinNang.value.splice(selectedIndex, 1);
      selectOptions.value = jinNang.value.map((item) => ({
        text: item.name,
        value: item.name,
      }));
    }
    showPopup.value = false; // 关闭弹出层
  };


  const onCancel = () => {
    showPopup.value = false;
  };

  const getCellClass = (rowIndex, colIndex) => {
    if (colIndex === 0) {
      const suit = tableData[rowIndex][colIndex];
      return ['cell', suit === '♠️' || suit === '♣️' ? 'black' : 'red'];
    }
    return 'cell';
  };
</script>

<style scoped>
.table-container {
  padding: 8px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin: auto;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.custom-table th:first-child,
.custom-table td:first-child {
  width: 50px; /* 调整第一列的宽度 */
}

.table-header {
  background-color: #f5f5f5;
  font-weight: bold;
}

.cell {
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s;
}

.cell.black {
  color: black;
  font-weight: bold;
}

.cell.red {
  color: red;
  font-weight: bold;
}

.cell:hover {
  background-color: #f0f0f0;
}

.empty-cell {
  background-color: #f5f5f5;
}
</style>
