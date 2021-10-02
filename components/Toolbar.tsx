import Link from "next/link";
import {
  AppBar,
  Link as MuiLink,
  Toolbar as MuiToolbar,
} from "@material-ui/core";

type ToolbarProps = {
  title: string;
};

const Toolbar: React.FC<ToolbarProps> = ({ title }) => {
  return (
    <AppBar color="inherit" position="static">
      <MuiToolbar>
        <Link passHref href="/">
          <MuiLink variant="h5">{title}</MuiLink>
        </Link>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
