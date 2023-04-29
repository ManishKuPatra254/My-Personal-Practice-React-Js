

export function PropsPassingasFunction({ PlaceDetails , elements }) {

    function handleClick(){
        alert(`My name is Manish ${elements}`)
    }

    const {
        name,
        age,
        place,
        district,
    } = PlaceDetails

    return (
        <>
            <button  onClick={handleClick} >{name}</button>
            <button>{age}</button>
            <button>{place}</button>
            <button>{district}</button>
        </>
    )
}