

const Button = ({varient=null,text,className=null}) => {
    return (
        <button className={`${varient=='black'?'bg-slate-800':'bg-orange-500'} text-white px-6 py-3 rounded-md text-center inline-block ${className}`}>
            {text}
        </button>
    );
};

export default Button;