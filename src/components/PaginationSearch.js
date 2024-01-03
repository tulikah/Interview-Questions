
import { useEffect, useState } from "react";
import { URL } from "./constants";


const PaginationSearch = () => {
    const [beer, setBeers] = useState([]);
    const [page, setPage] = useState(1);
    const [beerName, setBeerName] = useState("");
    const PER_PAGE = 25;
    const getBeerData = async () => {
      let searchBeer = beerName !== "" ? `&beer_name=${beerName}` : "";
      try {
        let data = await fetch(
          `${URL}?page=${page}&per_page=${PER_PAGE}${searchBeer}`
        );
        let json = await data.json();
        console.log(json);
        setBeers(json);
      } catch (err) {
        console.log("Error calling the api");
      }
    };
  
    useEffect(() => {
      getBeerData();
    }, [page, beerName]);
  
    return (
      <div className="App">
        <div>
          {" "}
          <div>
            <input
              placeholder="Search beer name"
              value={beerName}
              onChange={(e) => setBeerName(e.target.value)}
            />
            <label>Page</label>
            <select id="pages" onChange={(e) => setPage(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          {beer.map((b) => (
            <Beers key={b.id} data={b} />
          ))}
        </div>
      </div>
    );
  }
  
  export const Beers = ({ data }) => {
    return (
      <div className="beers">
        <img className="beerImg" src={data.image_url} alt={name} />
        <div className="name">{data.name}</div>
      </div>
    );
  };

export default PaginationSearch;