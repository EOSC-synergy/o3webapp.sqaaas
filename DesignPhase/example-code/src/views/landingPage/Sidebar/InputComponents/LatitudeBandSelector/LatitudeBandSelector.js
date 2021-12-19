import React from "react";
import { useDispatch } from "react-redux"
import { setLocation } from "../../../../../store/plotSlice";

/**
 * Enables the user to choose minimum and maximum latitude
 * @param {Object} props
 * @param {function} props.reportError - error handling
 * @returns {JSX} a JSX containing a dropdown and if "individual latitude band" is selected a number input field
 */
function LatitudeBandSelector(props) {

    const min = -90;
    const max = +90;
    const predefinedOptions = [
    {
        name: "global",
        min: 90,
        max: -90
    }
    ]

    // const dispatch = useDispatch()
    const [selectedLocations, setSelectedLocations] = React.useState();
    let i = props.reportError;

    const handleChangeLocation = (event) => {
        // setSelectedLocations(event.target.value);
        // dispatch(setSelectedLocations(event.target.value))
    };

    return (
        <>
        </>
    );
}

export default LatitudeBandSelector;