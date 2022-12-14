import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultContainer.css';

const ResultContainer = ({ suggestedMeds }) => {
    const suggestMedsJsx = suggestedMeds.map((suggestedMeds) => {
        return <NameCard key={suggestedMeds.id} suggestedMeds={suggestedMeds.data.name} />;
    })

    return (
        < div className="results-container">
            {suggestMedsJsx}
        </ div >
    )
}

export default ResultContainer;