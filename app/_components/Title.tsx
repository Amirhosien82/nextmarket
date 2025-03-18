interface PropsTitle {
  children: string;
}

function Title({ children }: PropsTitle) {
  return <h3 className="text-xl dark:text-gray-50">{children}</h3>;
}

export default Title;
