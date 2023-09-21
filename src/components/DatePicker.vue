<template>
  <div class="my-datepicker form-input-wrap__input-wrap w-100">
    <input
      class="form-input-wrap__form-input w-93"
      id="label-birthday"
      type="text"
      ref="datepicker"
      placeholder="Birthday"
      :value="selectedDate"
    />
     <div class="custom-dropdown">
      <div class="dropdown-trigger" @click="toggleYearDropdown">
        {{ selectedYear }}
        <i class="fas fa-caret-down"></i> <!-- Add an arrow icon or your custom icon -->
      </div>
      <div class="dropdown-options" v-if="isYearDropdownOpen">
        <div
          v-for="year in availableYears"
          :key="year"
          @click="selectYear(year)"
          :class="{ selected: selectedYear === year }"
        >
          {{ year }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
export default {
  data() {
    return {
      selectedDate: null,
      //   selectedDate: "08.08.2023",
       selectedYear: new Date().getFullYear(), // Default to the current year
      availableYears: [], // Array to store available years
      isYearDropdownOpen: false, // Flag to track dropdown visibility
    };
  },
   methods: {
    toggleYearDropdown() {
      this.isYearDropdownOpen = !this.isYearDropdownOpen;
    },
    selectYear(year) {
      this.selectedYear = year;
      this.isYearDropdownOpen = false;

      // Update the Flatpickr calendar to show the selected year
      const flatpickrInstance = this.$refs.datepicker._flatpickr;

      // Get the current date from Flatpickr
      const currentDate = flatpickrInstance.selectedDates[0];

      // Create a new date with the selected year and the month and day from the current date
      const newDate = new Date(year, currentDate.getMonth(), currentDate.getDate());

      // Set the new date in Flatpickr
      flatpickrInstance.setDate(newDate);

      // Update the selectedDate in your custom format
      const formattedDate = flatpickrInstance.formatDate(newDate, "d/m/Y");
      this.selectedDate = formattedDate;
    },
  },
  mounted() {
    const options = {
      // dateFormat: "Y/m/d",
      // altFormat: "Y/m/d",
      // ariaDateFormat: "Y/m/d",
      altInput: true,
      dateFormat: "d/m/Y",
      altFormat: "d/m/Y",
      ariaDateFormat: "d/m/Y",
      allowInput: true,
      // Add custom CSS classes
      className: "my-datepicker",
       
      // Add callback function to update selectedDate
      
      onChange: (selectedDates) => {
        if (selectedDates.length === 0) return "";
        if (selectedDates.length === 1) {
          this.selectedDate = selectedDates;
          console.log(selectedDates);
        }
      },
       onOpen: () => {
        // Calculate the range of years to display in the dropdown
        const currentYear = new Date().getFullYear();
        const yearsToShow = 10; // You can adjust this number as needed
        this.availableYears = Array.from(
          { length: yearsToShow },
          (_, i) => currentYear - yearsToShow / 2 + i
        );
       const monthDropdown = instance.calendarContainer.querySelector( ".flatpickr-current-month")
        console.log(monthDropdown, "test")
      },
      //  onOpen: function(selectedDates, dateStr, instance) {
      //   // Customize the month dropdown options
      //   const monthDropdown = instance.calendarContainer.querySelector(
      //     ".flatpickr-monthDropdown-months"
      //   );

      //   if (monthDropdown) {
      //     monthDropdown.id = "custom-month-select";
      //     const monthOptions = monthDropdown.querySelectorAll("option");
      //     monthOptions.forEach((option) => {
      //        option.id = "custom-month-option";
      //     });
      //   }
      // },
      showMonths: 1,
      locale: {
        weekdays: {
          shorthand: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          longhand: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        months: {
          shorthand: [
            "Jn",
            "Fb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          longhand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        rangeSeparator: "-",
      },
    };
    new Flatpickr(this.$refs.datepicker, options);
  },
};
</script>
<style scopped>

.flatpickr-calendar {
  width: 430px;
  height: 396px;
  border-radius: 16px;
  border: 1px solid white;
  background: grey;
  box-shadow: 0px 1px 2px 0px rgba(0, 14, 51, 0.25);
}

.flatpickr-innerContainer {
  margin-top: 6px;
  padding-block-end: 24px;
}

.flatpickr-months .flatpickr-next-month,
.flatpickr-months .flatpickr-prev-month {
  background: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 14, 51, 0.05);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  top: 24px;
  padding: 0;
  display: grid;
  place-content: center;
}
.flatpickr-next-month.flatpickr-next-month {
  right: 24px !important;
}
.flatpickr-months .flatpickr-prev-month {
  left: 24px !important;
}
.flatpickr-months .flatpickr-next-month svg,
.flatpickr-months .flatpickr-prev-month svg {
  width: 15px;
  height: 15px;
  fill: #747678;
}

.flatpickr-month {
  height: 74px !important;
  padding-block-start: 24px !important;
}
.flatpickr-current-month {
  height: 50px !important;
  padding: 0 !important;
}
.flatpickr-monthDropdown-months,
.flatpickr-current-month .numInputWrapper {
  background-color: white !important;
  padding: 10px 12px !important;
  border-radius: 6px !important;
  box-shadow: 0px 1px 1px 0px rgba(0, 14, 51, 0.05);
  margin-block-start: 0 !important;
}

.flatpickr-current-month .numInputWrapper {
  margin-left: 25px;
}
.flatpickr-current-month input.cur-year {
  padding: 0 !important;
}

.flatpickr-monthDropdown-months,
.flatpickr-current-month input.cur-year {
  font-size: 20px !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: grey !important;
}

.flatpickr-current-month .numInputWrapper .arrowUp,
.flatpickr-current-month .numInputWrapper .arrowDown {
  display: none;
}
/* .flatpickr-monthDropdown-month {
  font-size: 16px !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: grey !important;
} */

/* .flatpickr-monthDropdown-months > option{
  background-color: white !important; 
  color: red !important; 
  font-size: 16px !important;
  font-weight: bold !important; 
  padding: 15px 10px !important; 
  margin-block: 20px !important;
  border-radius: 5px !important;
  border: 1px solid orangered !important; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1) !important;
}

.flatpickr-monthDropdown-months > option:hover {
  background: red !important;
  color: green !important;
  cursor: pointer !important;
  border: 1px solid orange !important;
} */

#custom-month-option {
  color: lightseagreen !important;
  padding-block: 20px !important;
  cursor: pointer !important;
}
#custom-month-select > #custom-month-option:hover  {
  color: red !important;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus{
  outline: 3px solid blue !important;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:active  {
  outline: 3px solid orange !important;
}
.numInputWrapper {
  display: none !important;
}

.custom-dropdown {
  background-color: red;
  padding: 20px;
  /* position: absolute; */
}
</style>