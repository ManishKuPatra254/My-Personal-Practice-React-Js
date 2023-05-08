
import { useRef } from 'react';

export function RefferenceHooks() {

    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
        // console.log(inputRef)
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Submit Here</button>

            {/* whenever i am clicking on this button the input get triggered and focus in line no . 9 comes to a action */}
        </>
    )
}