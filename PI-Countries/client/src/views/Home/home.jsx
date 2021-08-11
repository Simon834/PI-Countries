import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homeStyles.css";

import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setCostsPerPage] = useState(9);

  useEffect(() => {
    dispatch(getCountries());
    setPosts(countries);
  }, [posts]);

  //otener los paises que se muestran por pagina

  const indexOfLP = currentPage * postsPerPage;
  const indexOfFP = indexOfLP - postsPerPage;
  const currentPosts = posts.slice(indexOfFP, indexOfLP);

  console.log(currentPosts);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="cards">
        {currentPosts.map((p) => (
          <li key={p.ID}>
            <Link to={`/search/${p.ID}`}>
              <CountryCard
                name={p.name}
                region={p.region}
                flagImg={p.flagImg}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
}
