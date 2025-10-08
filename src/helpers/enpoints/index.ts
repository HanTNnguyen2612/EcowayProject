const prefixAuth: string = "/api/auth";

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
  CREATE_QR: `${prefixUser}/scan/create-qr`,
  SCAN_FROM_USER: `${prefixUser}/scan/{id}`,
};

export { endpointAuth, endpointUsersManagement, endpointScan };
