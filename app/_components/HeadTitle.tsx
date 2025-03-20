interface PropsTitle {
  children: string;
}

function HeadTitle({ children }: PropsTitle) {
  return (
    <h3 className="text-xl md:text-2xl font-bold dark:text-gray-50 border-b-[3px] border-b-color-success-100 dark:border-b-color-success-200 pb-1 inline-block">
      {children}
    </h3>
  );
}

export default HeadTitle;
