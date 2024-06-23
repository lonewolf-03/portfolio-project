import "./AnimatedLetters.scss";

const AnimatedLetters = ({letterClass, strArr, idx}) => {
    return (
        <span>
            {strArr.map((chr, i) => (
                <span key={chr+i} className={`${letterClass} _${i+idx}`}>
                    {chr}
                </span>
            ))}
        </span>
    );
}

export default AnimatedLetters;