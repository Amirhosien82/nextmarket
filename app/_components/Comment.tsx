import Like from "@/app/_components/_icons/Like";
import DisLike from "@/app/_components/_icons/DisLike";

interface CommentProps {
  comments: {
    fullName: string;
    comment: string;
    like: number;
    dislike: number;
    title: string;
  };
}

function Comment({ comments }: CommentProps) {
  const { title = "قیمت", comment, dislike, like, fullName } = comments;
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-3 h-56 border rounded-md p-4 dark:border-gray-700">
      <div className="flex justify-start">
        <h3 className="dark:text-gray-50">{fullName}</h3>
      </div>
      <div>
        <h3 className="dark:text-gray-50 leading-5 text-[12px] text-justify">
          {title}
        </h3>
        <h3 className="dark:text-gray-50 leading-5 text-sm text-justify">
          {comment}
        </h3>
      </div>
      <div className="flex justify-start gap-3">
        <div className="flex flex-col items-center justify-center">
          <button type="button">
            <Like />
            <h3 className="text-color-success-200 text-sm">{like}+</h3>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button type="button">
            <DisLike />
            <h3 className="text-color-danger-200 text-sm">{dislike}-</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
