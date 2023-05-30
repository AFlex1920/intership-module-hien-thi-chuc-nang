import { Children, useState } from "react";
import { NavbarPage } from "@/components/navbar/navbar";
import HeaderPage from "@/components/header/header";
import NavFooter from "@/components/navbar/footer";
import Split from "react-split";
import React from "react";
import leftSidebar from "./components/left-sidebar/left-sidebar";

import {
  AppShell,
  Header,
  MediaQuery,
  useMantineTheme,
  createStyles,
  Footer,
  Grid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  infoPerson: {
    width: "100%",
    height: "300px",
    borderRadius: theme.radius.md,
    display: "block",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
  },
  paper: {
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
}));

const ThaoTacChucNang = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        navbarOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <NavbarPage />
          </MediaQuery>
        }
        footer={
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Footer height={{ base: 50, md: 60 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <NavFooter />
              </div>
            </Footer>
          </MediaQuery>
        }
        header={
          <Header height={{ base: 50, md: 60 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <HeaderPage />
            </div>
          </Header>
        }
      >
        <leftSidebar></leftSidebar>
        <Split className="split">
          <div>main</div>
          <div>right-sidebar</div>
        </Split>
      </AppShell>
    </>
  );
};

export default ThaoTacChucNang;
