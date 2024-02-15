import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  HomeModernIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function SidebarWithBurger() {
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Tempest
            </Typography>
          </div>
          <List>
            <hr className="my-0 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <HomeModernIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Account
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </List>
          <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Sign Up
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Sign up to Tempest Weather to customise your experience to your
              liking.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Sign Up
              </Typography>
            </div>
          </Alert>
        </Card>
      </Drawer>
    </>
  );
}

export function Sidebar() {
  const [openAlert, setOpenAlert] = React.useState(true);

  return (
    <Card
      className="sidebar h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
      color="gray-50"
      shadow={false}
    >
      <div className="mb-2 flex items-center justify-center gap-4 p-4">
        <Typography className="skyer" variant="h3" color="white">
          TEMPEST
        </Typography>
      </div>
      <List>
        <hr className="mb-3 white" />
        <Link to="/">
          <ListItem className="text-white text-base aeronaut">
            <ListItemPrefix>
              <HomeModernIcon className="h-5 w-5" color="white" />
            </ListItemPrefix>
            <p className="pt-1">Dashboard</p>
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem className="text-white text-base aeronaut">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" color="white" />
            </ListItemPrefix>
            <p className="pt-1">Settings</p>
          </ListItem>
        </Link>
        <Link to="/account">
          <ListItem className="text-white text-base aeronaut">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" color="white" />
            </ListItemPrefix>
            <p className="pt-1">Account</p>
          </ListItem>
        </Link>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Sign Up
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Sign up to Tempest to customise your experience to your liking.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium white"
          >
            Sign Up
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}

export default Sidebar;
