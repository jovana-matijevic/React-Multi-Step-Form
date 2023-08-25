const Button = ({ onClick, children, ghost, form, className = '' }) => {
    return (
        <button
            form={form}
            onClick={onClick} className={`py-2 px-5 rounded-md font-medium capitalize transition-all ${ghost ? "text-cool-gray hover:text-marine-blue" : " bg-marine-blue text-white hover:bg-marine-blue/80"} ${className} `}>
            {children}
        </button>
    )
}
export default Button;