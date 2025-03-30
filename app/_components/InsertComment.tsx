import Title from "@/app/_components/Title";
import Input from "@/app/_components/InputMove";
import Like from "@/app/_components/_icons/Like";
import DisLike from "@/app/_components/_icons/DisLike";
import Button from "@/app/_components/Button";

function InsertComment() {
  return (
    <div className="w-full flex flex-col gap-6 my-3 md:w-3/4 mx-auto">
      <Title>ثبت دیدگاه</Title>
      <Input placeholder="عنوان دیدگاه" textArea={false} />

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-600 text-sm dark:text-gray-400">
          این محصول را به دیگران پیشنهاد می کنید؟
        </h3>
        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 gap-3 border  dark:border-gray-600 dark:hover:border-color-success-200 hover:border-color-success-200 rounded-md "
          >
            <Like />
            <h3 className="text-color-success-200">میکنم</h3>
          </button>

          <button
            type="button"
            className="w-full flex justify-center items-center py-2 gap-3 border dark:border-gray-600 dark:hover:border-color-danger-200 hover:border-color-danger-200 rounded-md "
          >
            <DisLike />
            <h3 className="text-color-danger-200">نمیکنم</h3>
          </button>
        </div>
      </div>
      <div className="h-40 md:h-56">
        <Input placeholder="متن دیدگاه" textArea={true} />
      </div>
      <Button onClick={() => {}}>ثبت دیدگاه</Button>
    </div>
  );
}

export default InsertComment;
