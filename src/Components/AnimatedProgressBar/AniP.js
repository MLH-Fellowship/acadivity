import React from 'react';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from "d3-ease";

const AniP = () => {
    return(
        <div>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
            >
                {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the
                animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none" })}
                    />
                );
                }}
            </AnimatedProgressProvider>
        </div>
    );
};

export default AniP;