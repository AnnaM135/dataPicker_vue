<template>
  <div class="my-datepicker">
      <span class="ok ok1">img1</span>
      <input type="text" ref="datepicker" placeholder="Amsativ"  :value="selectedDate">
      <span class="ok ok2">img</span>
  </div>
</template>
<script>
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
export default {
  data() {
    return {
      // selectedDate: null,
      selectedDate:'08.08.2023-23.08.2023'
    };
  },
  mounted() {
  const options = {
    mode: 'range',
    dateFormat: 'd.m.Y',
    allowInput: true,
    // Add custom CSS classes
    className: 'my-datepicker',
    // Add callback function to update selectedDate
    onChange: (selectedDates) => {
      if (selectedDates.length === 0) return '';
      if (selectedDates.length === 1) {
            this.selectedDates = selectedDates[0].toLocaleDateString();
      } else {
          const start = selectedDates[0].toLocaleDateString();
          const end = selectedDates[1].toLocaleDateString();
          this.selectedDates = `${start}-${end}`;
      } 
    },
    showMonths: 2,
     locale: {
      weekdays: {
        shorthand: ['Կիր', 'Երկ', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
      months: {
        shorthand: [
                "Հուն",
                "Feb",
                "Mar",
                "Apr",
                "Մայ",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "Մայիս",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
      },
      rangeSeparator: '-',
    },
  };
  new Flatpickr(this.$refs.datepicker, options);
},
}
</script>
<style scopped>
.my-datepicker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 216px;
}
.ok {
  position: absolute;
  z-index: 22;
}
.ok1{
  color: red;
  left: 10px;
}
.ok2 {
  color: green;
  right: 10px;
}

.my-datepicker input{
  max-width: 216px;
  height: 39.94px;
  background: #FFFFFF;
  border: 1px solid #5151F9;
  border-radius: 10px;

  position: relative;

  padding-left: 50px;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #969CA7;
  padding-block: 11px;
}
.my-datepicker input::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #969CA7;
}


.flatpickr-calendar {
  width: 498px;
  height: 258px;
  background: white;
  border-radius: 11px;
  border: 0.75px solid #5151F9;
  box-shadow: 0px 0.75px 1.5px rgba(81, 81, 249, 0.15);
}
.flatpickr-innerContainer {
  margin-top: 12px;
}
.flatpickr-months .flatpickr-next-month,
.flatpickr-months .flatpickr-prev-month
{
  background: #F3F7FF;
  box-shadow: 0px 0.5px 0.5px rgba(0, 14, 51, 0.05);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  top: 8px;
  padding: 0;
  display: grid;
  place-content: center;
}
.flatpickr-next-month.flatpickr-next-month {
  right: 15px !important;
}
.flatpickr-months .flatpickr-prev-month {
  left: 15px !important;
}
.flatpickr-months .flatpickr-next-month svg,
.flatpickr-months .flatpickr-prev-month svg
{
  width: 10px;
  height: 8px;
  fill: #5151F9;
}

.flatpickr-current-month span.cur-month,
.flatpickr-current-month .numInputWrapper{
  background: #F3F7FF;
  box-shadow: 0px 0.5px 0.5px rgba(0, 14, 51, 0.05);
  border-radius: 3.5px;
  color: #141414;
  display: inline-block;
  font-family: 'Montserrat arm';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 5px 12px;
  text-align: center;
}
.flatpickr-current-month .numInputWrapper {
  width: 60px;
  height: 25px;  
  margin-left: 2px;
}

.flatpickr-weekdays {
  padding-inline: 15px;
}
span.flatpickr-weekday {
  color: #1F1F1F;
  font-family: 'Montserrat arm';
  font-weight: 500;
  font-size: 10px;
}
.dayContainer{
  width: 250px;
  min-width: 250px;
  max-width: 250px;
}
.flatpickr-day, .flatpickr-day.today {
  background: #F3F7FF;

  box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
  border-radius: 3.5px;
  color: #1F1F1F;
  font-size: 10px;
}
.flatpickr-day.startRange,
.flatpickr-day.inRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.startRange,
.flatpickr-day.endRange.endRange,
.flatpickr-day.today.inRange
{
  background: #5151F9;
  color: #F3F7FF;
  border-radius: 3.5px;
  font-size: 10px;
  box-shadow: 0px 1px 1px rgba(0, 14, 51, 0.05);
}
.flatpickr-days {
  padding-block: 7px 15px;
}
.flatpickr-day {
  max-width: 29px;
  height: 25px;
  line-height: 0;
  display: grid;
  place-content: center;
}
.dayContainer {
  justify-content: flex-start;
  column-gap: 2px;
  padding: 0 15px;
}

.rangeMode .flatpickr-day {
  margin-top: 2px;
}

</style>
