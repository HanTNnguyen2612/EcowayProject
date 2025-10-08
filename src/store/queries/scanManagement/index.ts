"use client";

import { baseApi } from "../base";

import { endpointScan } from "@/helpers/enpoints";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createScan: build.mutation({
      query: (body: string) => {
        return {
          url: endpointScan.CREATE_SCAN,
          method: "POST",
          body: { image_b64: body },
          flashError: true,
        };
      },
    }),
    createQR: build.mutation({
      query: (label: string) => {
        return {
          url: endpointScan.CREATE_QR,
          method: "POST",
          body: { label: label },
          flashError: true,
        };
      },
    }),
    scanUserByID: build.query({
      query: (id: string) => ({
        url: endpointScan.SCAN_FROM_USER.replace("{id}", id),
        method: "GET",
        flashError: true,
      }),
    }),
  }),
});

export const {
  useCreateScanMutation,
  useCreateQRMutation,
  useScanUserByIDQuery,
} = authAPI;
