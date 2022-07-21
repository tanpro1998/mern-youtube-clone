import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import { darkMode, lightMode } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
      <Container>
        <BrowserRouter>
          <Menu darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
                  <Route path=":id" element={<Video />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
