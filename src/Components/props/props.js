

export function PropsPassingasFunction({ PlaceDetails }) {

//     function handleClick(){
//         alert(`My name is Manish ${elements}`)
//     }

    const {
        name,
        age,
        place,
        district,
    } = PlaceDetails

    return (
        <>
            <button >{name}</button>
            <button>{age}</button>
            <button>{place}</button>
            <button>{district}</button>
        </>
    )
}
