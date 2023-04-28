

export function PropsPassingasFunction({ PlaceDetails }) {

    const {
        name,
        age,
        place,
        district,
    } = PlaceDetails

    return (
        <>
            <button>{name}</button>
            <button>{age}</button>
            <button>{place}</button>
            <button>{district}</button>
        </>
    )
}