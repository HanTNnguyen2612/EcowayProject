"use client";

import { baseApi } from "../base";

import { endpointAuth, endpointUsersManagement } from "@/helpers/enpoints";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    checkAuth: build.query({
      query: () => ({
        url: endpointUsersManagement.CHECK_AUTH,
        method: "GET",
        flashError: true,
      }),
    }),
    checkAdmin: build.query({
      query: () => ({
        url: endpointUsersManagement.CHECK_ADMIN,
        method: "GET",
        flashError: true,
      }),
    }),
    signIn: build.mutation({
      query: (data: {
        email: string;
        password: string;
      }) => ({
        url: endpointAuth.SIGN_IN,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    signUp: build.mutation({
      query: (data: {
        name: string;
        email: string;
        password: string;
      }) => ({
        url: endpointAuth.SIGN_UP,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    getProfile: build.query({
      query: () => ({
        url: endpointUsersManagement.GET_PROFILE,
        method: "GET",
        flashError: true,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useCheckAuthQuery,
  useCheckAdminQuery,
  useGetProfileQuery
} = authAPI;
