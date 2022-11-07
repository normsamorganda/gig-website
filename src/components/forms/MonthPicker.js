import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function YearMonthPicker() {
  const [value, setValue] = React.useState(null);
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          views={["year", "month"]}
          label="Year and Month*"
          minDate={dayjs("1900-03-01")}
          maxDate={dayjs("2023-06-01")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
