import { useState } from "react";
import { NavbarPage } from "@/components/navbar/navbar";
import HeaderPage from "@/components/header/header";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  rem,
  Group,
  SimpleGrid,
  Avatar,
  Center,
  Paper,
  List,
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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },

  cols: {
    border: theme.colors.dark,
  },

  //   hiddenMobile: {
  //     [theme.fn.smallerThan("sm")]: {
  //       display: "inline-block",
  //       width: "",
  //     },
  //   },
  //   hiddenDesktop: {
  //     [theme.fn.largerThan("sm")]: {
  //       display: "none",
  //     },
  //   },
}));

const ThongTinChucNang = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        // asideOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <NavbarPage />
          </MediaQuery>
        }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //       <Text>Application sidebar</Text>
        //     </Aside>
        //   </MediaQuery>
        // }
        // footer={
        //   <Footer height={60} p="md">
        //     Application footer
        //   </Footer>
        // }
        header={
          <Header height={{ base: 50, md: 60 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <HeaderPage />
            </div>
          </Header>
        }
      >
        <Group className={classes.infoPerson}>
          <Center>
            <Avatar
              src={null}
              size={200}
              radius={100}
              alt="no image here"
              color="indigo"
            />
          </Center>
          <Text pt="lg">
            Xin chào <b>Dương Nguyễn Phú Cường</b>
          </Text>
          <Text>
            Vai trò: <b>Trưởng nhóm G2B</b>
          </Text>
        </Group>
        <MediaQuery smallerThan="sm" styles={{ display: "block" }}>
          <SimpleGrid cols={3}>
            <Paper shadow="sm" radius="md" p="md" mb="xs">
              <Text tt={"uppercase"} ta={"center"}>
                Danh sách chức năng trong ngày
              </Text>
              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
            <Paper shadow="sm" radius="md" p="md" mb="xs">
              <Text tt={"uppercase"} ta={"center"}>
                Danh sách chức năng cuối tháng
              </Text>

              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
            <Paper shadow="sm" radius="md" p="md" mb="xs">
              <Text tt={"uppercase"} ta={"center"}>
                Danh sách chức năng trong năm
              </Text>

              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
          </SimpleGrid>
        </MediaQuery>
      </AppShell>
    </>
  );
};

export default ThongTinChucNang;
