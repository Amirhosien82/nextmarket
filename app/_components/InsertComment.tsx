import Title from "@/app/_components/Title";
import Input from "@/app/_components/InputMove";
import Like from "@/app/_components/_icons/Like";
import DisLike from "@/app/_components/_icons/DisLike";
import Button from "@/app/_components/Button";

function InsertComment() {
  return (
    <div className="w-full flex flex-col gap-6 my-3 md:w-1/3">
      <Title>ثبت دیدگاه</Title>
      <Input placeholder="عنوان دیدگاه" textArea={false} />

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-600 text-sm dark:text-gray-400">
          این محصول را به دیگران پیشنهاد می کنید؟
        </h3>
        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="w-full flex justify-center items-center py-2 gap-3 border border-color-success-200 rounded-md hover:border-2"
          >
            <Like />
            <h3 className="text-color-success-200">میکنم</h3>
          </button>

          <button
            type="button"
            className="w-full flex justify-center items-center py-2 gap-3 border border-color-danger-200 rounded-md hover:border-2"
          >
            <DisLike />
            <h3 className="text-color-danger-200">نمیکنم</h3>
          </button>
        </div>
      </div>
      <div className="h-40">
        <Input placeholder="متن دیدگاه" textArea={true} />
      </div>
      <Button onClick={() => {}}>ثبت دیدگاه</Button>
    </div>
  );
}

export default InsertComment;
