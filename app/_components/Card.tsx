import Image from "next/image";
import { convertToPersionDate } from "../_lib/convertToPersionDate";
import Link from "next/link";

interface ICardProps {
  image: string;
  id: string;
  message: string;
  created_at: Date;
  view: number;
  hottest: boolean;
}

function Card({ created_at, id, image, message }: ICardProps) {
  console.log(created_at);

  return (
    <Link href={`blog/${id}`}>
      <div className="flex flex-col gap-4  p-2 rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden rounded-bl-3xl">
          <Image src={image} alt="image" fill />
        </div>
        <h3 className="text-right dark:text-gray-50 line-clamp-1">{message}</h3>
        <h3 className="text-left text-sm text-color-success-200 mb-2">
          {convertToPersionDate(created_at)}
        </h3>
      </div>
    </Link>
  );
}

export default Card;
