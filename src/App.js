import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackBarProvider";
import UserProvider from "./users/providers/UserProvider";
import React from "react";
import CardsFormProvider from "./cards/providers/CardsFormProvider";
import SearchBarProvider from "./providers/SearchBarProvider";
import UserApiProvider from "./users/providers/UserApiProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider>
          <UserProvider>
            <UserApiProvider>
              <CardsFormProvider>
                <ThemeProvider>
                  <SearchBarProvider>
                    <Layout>
                      <Router />
                    </Layout>
                  </SearchBarProvider>
                </ThemeProvider>
              </CardsFormProvider>
            </UserApiProvider>
          </UserProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
