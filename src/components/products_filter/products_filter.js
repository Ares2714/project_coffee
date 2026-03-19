import "./products_filter.css";

const Filter = ({ value, onValueChange, selectedCountry, onCountryChange }) => {
    const handleNameChange = (event) => {
        onValueChange(event.target.value);
    };

    const handleCountryClick = (country) => {
        onCountryChange(selectedCountry === country ? '' : country);
    };

    return(
        <div>
            <div className="filter">
            <label className="label">Lookiing for</label>
            <input className="input" 
                type="text" 
                value={value} 
                onChange={handleNameChange} 
                placeholder="start typing here..."/>
            <label className="label">Or filter</label>
            <button
                className={`button ${selectedCountry === "Brazil" ? "button_active" : ""}`}
                onClick={() => handleCountryClick("Brazil")}
                type="button"
            >
                Brazil
            </button>
            <button
                className={`button ${selectedCountry === "Kenya" ? "button_active" : ""}`}
                onClick={() => handleCountryClick("Kenya")}
                type="button"
            >
                Kenya
            </button>
            <button
                className={`button ${selectedCountry === "Columbia" ? "button_active" : ""}`}
                onClick={() => handleCountryClick("Columbia")}
                type="button"
            >
                Columbia
            </button>
            <button
                className={`button ${selectedCountry === "" ? "button_active" : ""}`}
                onClick={() => onCountryChange("")}
                type="button"
            >
                All
            </button>
            </div>
        </div>
    );
}

export default Filter
