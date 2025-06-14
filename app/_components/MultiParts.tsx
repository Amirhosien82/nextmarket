"use client";

import { useState } from "react";
import HeadTitle from "@/app/_components/HeadTitle";
import Button from "@/app/_components/Button";
import Slider from "@/app/_components/CommentsSlider";
import InsertComment from "@/app/_components/InsertComment";

interface MultiProps {
  caption: string;
  productId: number;
  specifications: { key: string; value: string }[];
  comments:
    | {
        id: number;
        title: string;
        comment: string;
        like: number;
        dislike: number;
        fullName: string;
        productId: string;
      }[]
    | [];
}

function Multi({ caption, specifications, comments, productId }: MultiProps) {
  const [multi, setMulti] = useState<"caption" | "comments" | "specifications">(
    "caption"
  );

  const [openCaption, setOpenCaption] = useState<boolean>(false);

  const [commentsState, setCommentsState] = useState<
    {
      id: number;
      title: string;
      comment: string;
      like: number;
      dislike: number;
      fullName: string;
      productId: string;
    }[]
  >(comments);

  function newComment(newComment: {
    id: number;
    title: string;
    comment: string;
    like: number;
    dislike: number;
    fullName: string;
    productId: string;
  }) {
    setCommentsState((c) => [...c, newComment]);
  }

  return (
    <div className="w-full bg-white p-5 h-full dark:bg-gray-900 flex flex-col gap-5">
      <div className="flex justify-between items-center md:justify-start md:gap-4">
        <button
          type="button"
          onClick={() => {
            setMulti("caption");
          }}
          className={`text-sm dark:text-gray-50 px-3 py-2 rounded-md md:text-lg ${
            multi === "caption" && "bg-color-success-200 text-gray-50"
          }`}
          disabled={multi === "caption"}
        >
          معرفی
        </button>
        <button
          type="button"
          onClick={() => {
            setMulti("specifications");
          }}
          className={`text-sm dark:text-gray-50 px-3 py-2 rounded-md md:text-lg  ${
            multi === "specifications" && "bg-color-success-200 text-gray-50"
          }`}
          disabled={multi === "specifications"}
        >
          مشخصات
        </button>
        <button
          type="button"
          onClick={() => {
            setMulti("comments");
          }}
          className={`text-sm dark:text-gray-50 px-3 py-2 rounded-md md:text-lg  ${
            multi === "comments" && "bg-color-success-200 text-gray-50"
          }`}
          disabled={multi === "comments"}
        >
          دیدگاه
        </button>
      </div>

      <div className="flex flex-col items-start gap-4">
        {multi === "caption" ? (
          <>
            <HeadTitle>معرفی</HeadTitle>
            <h3
              className={`dark:text-gray-50 leading-8 text-justify ${
                openCaption
                  ? "line-clamp-none"
                  : "line-clamp-[8] md:line-clamp-6"
              }`}
            >
              {caption}
            </h3>
            <div className="w-full flex justify-center">
              <Button
                onClick={() => {
                  setOpenCaption((open) => !open);
                }}
              >
                {openCaption ? "بستن" : "مشاهده همه"}
              </Button>
            </div>
          </>
        ) : multi === "specifications" ? (
          <>
            <HeadTitle>مشخصات</HeadTitle>
            <div className="w-full flex flex-col">
              {specifications.map(({ key, value }) => (
                <h3
                  key={key}
                  className="w-full md:w-1/3 flex justify-between border-b border-gray-200 dark:border-gray-700 p-3"
                >
                  <span className="text-gray-400">{key}</span>
                  <span className="dark:text-gray-50">{value}</span>
                </h3>
              ))}
            </div>
          </>
        ) : (
          <>
            <HeadTitle>دیدگاه</HeadTitle>
            <Slider comments={commentsState} />
            <InsertComment
              productId={productId}
              newComment={newComment}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Multi;
