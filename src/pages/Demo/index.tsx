// ./src/pages/Demo/index.tsx
import {FC, useState, useEffect} from "react";
import axios from "axios";
import {connect, useSelector, useDispatch} from "react-redux";
import {getDemoData} from "./store/demoReducer";
import {clientStore} from "@/store";

interface IProps {
  content?: string;
  getDemoData?: (data: string) => void;
}

const Demo: FC<IProps> = (data) => {
  // const [content, setContent] = useState("");

  const content = useSelector((state) => {
    return (state as any).demo.content;
  });

  const dispatch = useDispatch<typeof clientStore.dispatch>();

  useEffect(() => {
    axios
      .post("/api/getDemoData", {
        content: "这是一个demo页面",
      })
      .then((res: any) => {
        // setContent(res.data?.data?.content);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{content}</h1>
        <button
          onClick={(): void => {
            // data.getDemoData && data.getDemoData("刷新过后的数据");
            dispatch(getDemoData("刷新过后的数据"));
          }}
        >
          刷新
        </button>
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => {
  // 将对应reducer的内容透传回dom
  return {
    content: state?.demo?.content,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDemoData: (data: string) => {
      dispatch(getDemoData(data));
    },
  };
};

// const storeDemo: any = connect(mapStateToProps, mapDispatchToProps)(Demo);

export const getInitProps = (store: any, data?: string) => {
  return store.dispatch(getDemoData(data || "这是初始化的demo"));
};

export default Demo;
// export default storeDemo;
