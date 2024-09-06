<template>
  <div class="data-table">
    <!-- Toggle for Card/List View -->
    <button @click="toggleView">{{ isCardView ? 'List View' : 'Card View' }}</button>

    <!-- List View Table -->
    <div v-if="!isCardView" class="table-container">
      <table>
        <thead>
          <tr>
            <!-- Checkbox Column (if enabled) -->
            <th v-if="checkbox">Select</th>
            <!-- Table Headers -->
            <th v-for="(col, index) in columns" :key="index" :style="{ width: columnWidths[index] + 'px' }">
              {{ col }}
            </th>
            <!-- Actions Column (if enabled) -->
            <th v-if="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <!-- Checkbox Column (if enabled) -->
            <td v-if="checkbox">
              <input type="checkbox" v-model="selectedRows[rowIndex]" />
            </td>
            <!-- Table Data -->
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" :style="{ width: columnWidths[cellIndex] + 'px' }">
              {{ cell }}
            </td>
            <!-- Actions Column (if enabled) -->
            <td v-if="actions">
              <button @click="editRow(rowIndex)">Edit</button>
              <button @click="deleteRow(rowIndex)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Card View -->
    <div v-if="isCardView" class="card-container">
         <div v-for="(row, index) in data" :key="index" class="card">
          <!-- Checkbox Column (if enabled) -->
        <div v-if="checkbox">
          <input type="checkbox" v-model="selectedRows[rowIndex]" />
        </div>
            <div v-for="(col, colIndex) in columns" :key="colIndex" class="card-item">
                <strong>{{ col }}:</strong> {{ row[col.toLowerCase()] }}
            </div>
             <!-- Actions Column (if enabled) -->
        <div v-if="actions" class="actions">
          <button @click="editRow(rowIndex)">Edit</button>
          <button @click="deleteRow(rowIndex)">Delete</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    checkbox: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCardView: false,
      selectedRows: {},
      columnWidths: []
    };
  },
  methods: {
    toggleView() {
      this.isCardView = !this.isCardView;
    },
    calculateColumnWidths() {
      const widths = this.columns.map((col, index) => {
        let maxWidth = col.length * 10; // Initial width based on column header
        this.data.forEach(row => {
          const cellWidth = row[index].toString().length * 10;
          if (cellWidth > maxWidth) {
            maxWidth = cellWidth;
          }
        });
        return maxWidth;
      });
      this.columnWidths = widths;
    },
    editRow(rowIndex) {
      console.log(`Edit row ${rowIndex}`);
    },
    deleteRow(rowIndex) {
      console.log(`Delete row ${rowIndex}`);
    }
  },
  mounted() {
    this.calculateColumnWidths();
  }
};
</script>

<style scoped>
.data-table {
  width: 100%;
  overflow-x: auto;
}
.table-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid layout */
  gap: 20px; /* Space between cards */
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.card-item {
  margin-bottom: 8px; /* Spacing between name:value pairs */
}

.card-item strong {
  margin-right: 8px;
}


.table-container table {
  width: 100%;
  border-collapse: collapse; /* Ensures borders don't overlap */
}

.table-container th,
.table-container td {
  border: 1px solid #ccc; /* Light gray border for all table cells */
  padding: 8px; /* Add some padding for better spacing */
  text-align: left; /* Align text to the left */
}

/* Optional: Style for table header */
.table-container th {
  background-color: #f5f5f5; /* Light gray background for header */
  font-weight: bold;
}

.table-container th,
.table-container td {
  border: 1px solid #ccc;
  padding: 8px;
}

.table-container th:first-child,
.table-container td:first-child,
.table-container th:last-child,
.table-container td:last-child {
  position: sticky;
  background: white;
  z-index: 1;
}

.table-container th:first-child,
.table-container td:first-child {
  left: 0;
    box-shadow: 4px 0 8px -2px rgba(0, 0, 0, 0.2); /* Shadow on the right side */

}

.table-container th:last-child,
.table-container td:last-child {
  right: 0;
    box-shadow: -4px 0 8px -2px rgba(0, 0, 0, 0.2); /* Shadow on the left side */

}

.table-container {
  overflow-x: auto;
}

</style>
