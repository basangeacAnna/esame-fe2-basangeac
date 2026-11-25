import type { PageTitleProps } from "../types/props";

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p className="page-sub">{subtitle}</p>
    </>
  );
};

export default PageTitle;
