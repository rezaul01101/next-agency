import Link from "next/link";


const PageHeader = ({name}) => {
  return (
    <div className="container mx-auto py-20 flex flex-col items-center justify-center">
      <h3 className="text-slate-900 text-3xl md:text-6xl font-bold">{name}</h3>
      <div className="text-xl">
        <Link href={"/"} className="hover:text-orange-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-bold">{name}</span>
      </div>
      {/* <p><Link href={'/'}>Home</Link> About Us</p> */}
    </div>
  );
};

export default PageHeader;
