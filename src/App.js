import React, { useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import BookingPage from "./Components/BookingPage";
import { fetchAPI, submitAPI } from "./api.js";

const colors = {
  brand: {
    900: "#495E57",
    800: "#F4CE14",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const router = (availableTimes, dispatch) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "reservation",
          element: (
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          ),
        },
      ],
    },
  ]);

const initializeTimes = (date) => {
  // const times = [];

  // for (let i = 17; i <= 22; i++) {
  //   times.push(`${i}:00`);
  // }

  // const url = `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js/fetchAPI?date=${date}`;
  return fetchAPI(date);
};

const updateTimes = (times, time) => {
  return times.filter((hour) => hour !== time);
};
function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes(new Date())
  );

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router(availableTimes, dispatch)} />
    </ChakraProvider>
  );
}

export default App;
export { updateTimes };
