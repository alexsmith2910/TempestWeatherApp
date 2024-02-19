import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
  Card,
} from "@material-tailwind/react";
import {
  HomeModernIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [openAlert, setOpenAlert] = React.useState(true);

  return (
    <Card
      className="sidebar h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-white/20"
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
        variant="gradient"
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
          <Link to={"/signup"}>
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium white"
              onClick={() => setOpenAlert(false)}
            >
              Sign Up
            </Typography>
          </Link>
        </div>
      </Alert>
    </Card>
  );
}

export default Sidebar;
