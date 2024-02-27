import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "./components/Topbar";
import Login from "@/app/Login/page";
import Home from "@/app/Home/page";
import Menu from "@/app/Menu/Page";
import Profile from "@/app/Profile/Page";

export default function sd() {
  return (
    <main className="flex justify-center">
      <Menu/>
    </main>
  );
}
