import CountUp from "@/components/Counters/CountUp";
import GradientText from "@/components/Counters/GradientText";

const useItemsCounter = (initialValue = 0) => {

    return (
        <>
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
                Number of items: <CountUp
                    from={0}
                    to={initialValue}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                />
            </GradientText>
        </>)
}

export default useItemsCounter;