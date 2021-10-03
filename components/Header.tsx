import Link from "next/link";
import { AppBar, Link as MuiLink, Toolbar } from "@material-ui/core";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar color="inherit" position="static" style={{ marginBottom: 20 }}>
      <Toolbar variant="dense" style={{ margin: "auto" }}>
        <Link passHref href="/">
          <MuiLink variant="h5">{title}</MuiLink>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
