'use client';
import Wrapper from "@/components/Wrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, type IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { type Dispatch, type SetStateAction, useState, useRef } from "react";

export default function Slider() {
    const [ selected, setSelected ] = useState('');
    const [ opacity, setOpacity ] = useState(1);

    let unifiedState = {selected, setSelected, setOpacity};

    return (
        <Wrapper>
            <div className="h-[30rem] md:h-[24rem] max-w-[35rem] md:w-[50rem] md:max-w-full grid grid-cols-3 grid-rows-3 gap-4 my-24 drop-shadow-2xl">
                <Button text="Web Development" row={1} state={unifiedState}/>
                <Button text="UI/UX Design" row={2} state={unifiedState}/>
                <Button text="Bot Development" row={3} state={unifiedState}/>
                <div className="bg-white rounded-lg px-1 py-2 col-start-1 md:col-start-2 col-span-3 md:col-span-2 row-start-2 md:row-start-1 row-span-2 md:row-span-3">
                    <div style={{ opacity: opacity, transition: 'all 0.5s' }} className={`h-full w-full flex items-center justify-between`}>
                        <SliderCont selected={selected} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

function Button({ text, row, state } : { text: string, row: number, state: { selected: string, setSelected: Dispatch<SetStateAction<string>>, setOpacity: Dispatch<SetStateAction<number>>} }) {
    let temp: string = '';

    if ( state.selected == text ) {
        temp = 'ring-2 scale-105';
    }

    function handleButtonClick(event: any) {
        state.setOpacity(0);
        setTimeout(() => {
            state.setSelected(text);
            state.setOpacity(1);
        }, 400);
    }

    return (
        <button onClick={handleButtonClick} className={`flex items-center justify-center row bg-white rounded-lg hover:ring-2 ${temp} ring-black text-xl font-bold col-start-${row} md:col-start-1 col-span-1 row-start-1 md:row-start-${row} md:row-span-1 transition-all transition-200`}>
            {text}
        </button>
    )
}

function SliderCont({ selected } : { selected: string }) {
    const [ transform, setTransform ] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const slidesCount = ref.current?.childElementCount || 0;

    if (selected) {
        return (
            <>
                <Arrow direction="left" slidesCount={slidesCount} transform={transform} setTransform={setTransform} />
                <div className="h-full w-full bg-slate-300 rounded-lg overflow-hidden snap-x snap-mandatory">
                    <div ref={ref} className={`h-full w-full inline-flex items-center transition-[2000ms] -translate-x-[${transform}%]`}>
                        {([...Array(4)].map((_, i) => (
                            <Slide key={i} color={i % 3 === 0 ? 'black' : i % 3 === 1 ? 'blue-900' : 'green-500'} />
                        )))}
                    </div>
                </div>
                <Arrow direction="right" slidesCount={slidesCount} transform={transform} setTransform={setTransform} />
            </>
        )
    } else {
        return (
            <div className="h-full w-full flex items-center justify-center pointer-events-none">
                <h1 className="text-2xl font-bold text-gray-600">Choose a service</h1>
            </div>
        )
    }
}

function Slide({ color } : { color: string }) {
    return (
        <div className={`h-full w-full shrink-0 bg-${color} border-2 border-blue-500 rounded-lg`}>

        </div>
    )
}

function Arrow({ direction, slidesCount, transform, setTransform } : { direction: string, slidesCount: number, transform: number, setTransform: Dispatch<SetStateAction<number>>}) {
    let temp: IconDefinition = direction == "left" ? faChevronLeft : faChevronRight;

    function handleClick() {
        if (transform > 0 && direction == "left") {
            setTransform(transform - 100);
        } else if (transform < (slidesCount * 100 - 100) && direction == "right") {
            setTransform(transform + 100);
            console.log(transform);
        }
    }

    return (
        <button onClick={handleClick} className="h-full w-9 text-4xl flex items-center justify-center">
            <FontAwesomeIcon icon={temp} />
        </button>
    )
}