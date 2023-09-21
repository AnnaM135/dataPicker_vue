<script setup>
import DatepickerLite from 'vue3-datepicker-lite'
const datepickerSetting = {
  id: "birthday",
  name: "birthday",
  class: "myDateInput",
  value: "2020/10/01",
  placeholder: "Select",
  isButtonType: false,
  yearMinus: 0,
  fromDate: "2010/02/10",
  toDate: "2030/12/10",
  disabledDate: [
    "2020/10/02",
    "2020/10/03",
    "2020/10/04",
    "2020/10/05",
    "2020/10/06",
  ],
  locale: {
    format: "YYYY/MM/DD",
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    startsWeeks: 0,
    // todayBtn: "Today",
    // clearBtn: "Clear",
    // closeBtn: "Close",
  },
  changeEvent: (value) => {
    console.log(value + " selected!");
  },
  disableInput: false,
}
</script>

<template>
    <DatepickerLite
  :id-attr="datepickerSetting.id"
  :name-attr="datepickerSetting.name"
  :class-attr="datepickerSetting.class"
  :value-attr="datepickerSetting.value"
  :placeholder-attr="datepickerSetting.placeholder"
  :is-button-type="datepickerSetting.isButtonType"
  :year-minus="datepickerSetting.yearMinus"
  :years-range="10"
  :from="datepickerSetting.fromDate"
  :to="datepickerSetting.toDate"
  :disabled-date="datepickerSetting.disabledDate"
  :locale="datepickerSetting.locale"
  @value-changed="datepickerSetting.changeEvent"
  :disable-input="datepickerSetting.disableInput"
  :show-bottom-button="true"
/>
</template>

<style scoped>
#birthday .picker__frame{
    background-color: red !important;
}
#birthday .picker__header {
     background-color: red !important;
}
</style>