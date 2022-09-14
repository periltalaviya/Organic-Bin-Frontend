import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Roles from "../../../Roles";
import React, { useEffect, useState } from "react";
import Regex from "../../../ValidationRegex";
import UserActions from "../../../actions/UserActions";

const UserRegister = () => {
  let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    contact: "",
    dateOfBirth: "",
    pincode: "",
    street: "",
    cityName: "",
    stateName: "",
    role: Roles.USER,
  };

  let initialErrorState = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    contact: false,
  };

  const errorText = {
    name: "Please Enter Name Properly",
    email: "Please Enter Email Properly",
    password: "Password and Confirm Password should match",
    contact: "Please Enter Contact Properly",
    gender: "Please Enter Gender Properly",
  };

  const [user, setUser] = useState(initialState);
  const [isError, setIsError] = useState(initialErrorState);

  useEffect(() => {
    UserActions.getStateList((data) => {
      console.log(data);
    });
  }, []);

  const validate = () => {
    let isValid = false;
    if (!Regex.NAME.test(user.firstName)) {
      setIsError({ ...isError, firstName: true });
    } else if (!Regex.NAME.test(user.lastName)) {
      setIsError({ ...isError, lastName: true });
    } else if (!Regex.EMAIL.test(user.email)) {
      setIsError({ ...isError, email: true });
    } else if (!Regex.CONTACT.test(user.contact)) {
      setIsError({ ...isError, contact: true });
    } else if (!(user.password === user.confirmPassword)) {
      setIsError({ ...isError, password: true });
    } else {
      isValid = true;
    }
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClear = () => {
    setUser(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      setIsError(initialErrorState);
      // console.log(user);
    }
  };

  return (
    <Container sx={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          onChange={handleChange}
          value={user.firstName}
          required
          error={isError.firstName}
          helperText={isError.firstName && errorText.name}
          sx={{ margin: "20px" }}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          onChange={handleChange}
          value={user.lastName}
          required
          error={isError.lastName}
          helperText={isError.lastName && errorText.name}
          sx={{ margin: "20px" }}
        />
        <TextField
          id="email"
          name="email"
          label="Email Address"
          onChange={handleChange}
          value={user.email}
          required
          error={isError.email}
          helperText={isError.email && errorText.email}
          sx={{ margin: "20px" }}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          value={user.password}
          required
          error={isError.password}
          helperText={isError.password && errorText.password}
          sx={{ margin: "20px" }}
        />

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={user.confirmPassword}
          required
          error={isError.password}
          helperText={isError.password && errorText.password}
          sx={{ margin: "20px" }}
        />

        <TextField
          id="contact"
          name="contact"
          label="Contact Number"
          type="number"
          onChange={handleChange}
          value={user.contact}
          required
          error={isError.contact}
          helperText={isError.contact && errorText.contact}
          sx={{ margin: "20px" }}
        />

        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="gender_label">Gender</InputLabel>
          <Select
            labelId="gender_label"
            label="Gender"
            id="gender"
            name="gender"
            value={user.gender}
            required
            onChange={handleChange}
          >
            <MenuItem value={"M"}>Male</MenuItem>
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"T"}>Transgender</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date Of Birth"
              inputFormat="dd/MM/yyyy"
              value={user.dateOfBirth}
              onChange={(newValue) =>
                setUser({
                  ...user,
                  dateOfBirth: newValue,
                })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField
          id="street"
          name="street"
          label="Address"
          onChange={handleChange}
          value={user.street}
          required
          multiline
          sx={{ margin: "20px" }}
        />

        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="city_label">City</InputLabel>
          <Select
            labelId="city_label"
            label="City"
            id="cityName"
            name="cityName"
            value={user.cityName}
            required
            onChange={handleChange}
          >
            <MenuItem value={"Ahmedabad"}>Ahmedabad</MenuItem>
            <MenuItem value={"Gandhinagar"}>Gandhinagar</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="state_label">State</InputLabel>
          <Select
            labelId="state_label"
            label="State"
            id="stateName"
            name="stateName"
            value={user.stateName}
            required
            onChange={handleChange}
          >
            <MenuItem value={11}>Gujarat</MenuItem>
            <MenuItem value={12}>Kerala</MenuItem>
            <MenuItem value={13}>Madhya Pradesh</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="pincode"
          name="pincode"
          label="Pincode"
          type="number"
          value={user.pincode}
          onChange={handleChange}
          required
          sx={{ margin: "20px" }}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>

        <Button variant="contained" onClick={handleClear}>
          Clear
        </Button>
      </form>
    </Container>
  );
};

export default UserRegister;
