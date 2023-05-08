import { useEffect, useState } from "react";


export function EffectHooks() {

    const [changeStateAdd, setChangeAdd] = useState(0);
    const [changeStateSub, setChangeSub] = useState(0);


    useEffect(() => {
        console.log('Hi i am Manish Kumar Patra')
    }, [changeStateSub])

    function handleClickAdd() {
        setChangeAdd(changeStateAdd + 8);
    }
    function handleClickSub() {
        setChangeSub(changeStateSub - 8)
    }

    return (
        <>
            <h1>{changeStateAdd}</h1>
            <button onClick={handleClickAdd}>Add</button>
            <h1>{changeStateSub}</h1>
            <button onClick={handleClickSub}>Subtract</button>
        </>
    )
}