import Home from "@/pages/Home";
import Demo, {getInitProps} from "@/pages/Demo";

interface IRouter {
  path: string;
  element: JSX.Element;
  loadData?: (store: any) => any;
}

const router: Array<IRouter> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/demo",
    element: <Demo />,
    loadData: getInitProps,
  },
];

export default router;
