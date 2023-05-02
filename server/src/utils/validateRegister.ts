import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.firstName.length <= 2) {
    return [
      {
        field: "firstName",
        message: "Length should be greater than 2 characters",
      },
    ];
  }
  if (options.firstName.length < 0) {
    return [
      {
        field: "firstName",
        message: "First Name should not be empty",
      },
    ];
  }

  if (options.lastName.length <= 2) {
    return [
      {
        field: "firstName",
        message: "Length should be greater than 2 characters",
      },
    ];
  }

  if (options.lastName.length < 0) {
    return [
      {
        field: "lastName",
        message: "Last Name should not be empty",
      },
    ];
  }

  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Email is not valid",
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Length should be greater than 2 characters",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "username is not valid",
      },
    ];
  }

  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "password should be greater than 2 characters is not valid",
      },
    ];
  }

  return null;
};
