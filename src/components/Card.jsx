import Heading from "./Heading"

const Card = ({ heading, paragraph, children }) => {
    return (
        <div className="relative z-10 bg-white rounded-lg px-6 py-8 mx-4 md:max-w-lg ">
            <Heading heading={heading} paragraph={paragraph}></Heading>
            {children}
        </div>
    )
}

export default Card