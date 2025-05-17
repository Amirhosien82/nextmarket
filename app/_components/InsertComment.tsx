import Title from "@/app/_components/Title";
import Input from "@/app/_components/InputMove";
import Like from "@/app/_components/_icons/Like";
import DisLike from "@/app/_components/_icons/DisLike";
import Button from "@/app/_components/Button";
import { useAppContext } from "../context/Context";
import toast from "react-hot-toast";
import Link from "next/link";
import { useReducer } from "react";
import { getIdUser, insertComment } from "../_lib/comment";

type TinitialState = {
  isOk: boolean;
  title: string;
  message: string;
};

const initialState: TinitialState = {
  isOk: true,
  title: "",
  message: "",
};

type TAction =
  | { type: "set/isOk"; payload: boolean }
  | { type: "set/title"; payload: string }
  | { type: "set/message"; payload: string }
  | { type: "set/reset" };

function reducer(state: TinitialState, action: TAction) {
  switch (action.type) {
    case "set/isOk":
      return { ...state, isOk: action.payload };

    case "set/title":
      return { ...state, title: action.payload };

    case "set/message":
      return { ...state, message: action.payload };
    case "set/reset":
      return initialState;
  }
}

interface IInsertCommentProps {
  productId: number;
  newComment: (comment: {
    id: number;
    title: string;
    comment: string;
    like: number;
    dislike: number;
    fullName: string;
    productId: string;
  }) => void;
}

function InsertComment({ productId, newComment }: IInsertCommentProps) {
  const { user } = useAppContext();

  const [{ isOk, message, title }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="w-full flex flex-col gap-6 my-3 md:w-3/4 mx-auto">
      <Title>ثبت دیدگاه</Title>
      <Input
        placeholder="عنوان دیدگاه"
        textArea={false}
        value={title}
        onChange={(value: string) => {
          dispatch({ type: "set/title", payload: value });
        }}
      />

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-600 text-sm dark:text-gray-400">
          این محصول را به دیگران پیشنهاد می کنید؟
        </h3>
        <div className="flex justify-between gap-3">
          <button
            type="button"
            disabled={isOk}
            className={`w-full flex justify-center items-center py-2 gap-3 border  dark:border-gray-600 dark:hover:border-color-success-200 hover:border-color-success-200 rounded-md ${
              isOk && "border-color-success-200"
            }`}
            onClick={() => {
              dispatch({ type: "set/isOk", payload: true });
            }}
          >
            <Like />
            <h3 className="text-color-success-200">میکنم</h3>
          </button>

          <button
            type="button"
            disabled={!isOk}
            className={`w-full flex justify-center items-center py-2 gap-3 border dark:border-gray-600 dark:hover:border-color-danger-200 hover:border-color-danger-200 rounded-md ${
              !isOk && "border-color-danger-200"
            }`}
            onClick={() => {
              dispatch({ type: "set/isOk", payload: false });
            }}
          >
            <DisLike />
            <h3 className="text-color-danger-200">نمیکنم</h3>
          </button>
        </div>
      </div>
      <div className="h-40 md:h-56">
        <Input
          placeholder="متن دیدگاه"
          textArea={true}
          value={message}
          onChange={(value: string) => {
            dispatch({ type: "set/message", payload: value });
          }}
        />
      </div>
      <Button
        onClick={() => {
          if (user.aud) {
            try {
              (async () => {
                if (title && message) {
                  const userId: number = await getIdUser(user.fullName || "");

                  const newCommentData = await insertComment({
                    title,
                    dislike: 0,
                    like: 0,
                    comment: message,
                    productId,
                    userId,
                  });

                  toast.success("کامنت با موفقیت ذخیره شد");
                  newComment({
                    comment: message,
                    dislike: 0,
                    fullName: user.fullName || "",
                    productId: productId.toString(),
                    like: 0,
                    title,
                    id: newCommentData.id,
                  });
                  dispatch({ type: "set/reset" });
                } else {
                  toast(() => (
                    <h3 className="dark:text-gray-50">
                      لطفا موضوع و متن دیدگاه را وارد کنید
                    </h3>
                  ));
                }
              })();
            } catch {
              toast.error("کامنت نتوانست ذخیره شود");
            }
          } else {
            toast(
              (t) => (
                <div className="flex  items-start gap-7">
                  <h3 className="dark:text-gray-50 text-justify ">
                    برای ثبت کامنت اول باید وارد حساب کاربری خود شود و یا ثبت
                    نام کنید
                  </h3>
                  <Link
                    href="/login"
                    onClick={() => {
                      toast.dismiss(t.id);
                    }}
                    className="whitespace-nowrap bg-color-success-200 hover:bg-color-success-100 rounded-md px-4 py-2  transition-all duration-300 text-gray-50"
                  >
                    ثبت نام/ورود
                  </Link>
                </div>
              ),
              { duration: 5000 }
            );
          }
        }}
      >
        ثبت دیدگاه
      </Button>
    </div>
  );
}

export default InsertComment;
