// import { i18nTranslator } from "@/services/i18n";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      // message.error(i18nTranslator(`${action?.payload?.data?.code}`));
    }

    return next(action);
  };
