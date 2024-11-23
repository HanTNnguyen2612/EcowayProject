import { constants } from "@/settings";

const prefixAuth: string = "/api/auth";
const prefixBase: string = "/api/v1";
const prefixOther: string = "/api/core";

const prefixApiAuth: string = `/api/core`;

const prefixUser: string = "/api";
const endpointAuth = {
  SIGN_IN: `${prefixAuth}/login`,
  SIGN_UP: `${prefixAuth}/signup`,
};

const endpointUsersManagement = {
  CHECK_AUTH: `${prefixAuth}/check-auth`,
  CHECK_ADMIN: `${prefixAuth}/check-admin`,
  GET_PROFILE: `${prefixAuth}/get-profile`,
};

const endpointScan = {
  CREATE_SCAN: `${prefixUser}/scan`,
  SCAN_FROM_USER: `${prefixUser}/scan/{id}`
};


export {
  endpointAuth,
  endpointUsersManagement,
  endpointScan,
};
