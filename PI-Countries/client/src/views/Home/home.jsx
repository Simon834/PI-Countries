import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homeStyles.css";

import { getCountries } from "../../actions";
import CountryCard from "../../components/countryCard/countryCard";
import Pagination from "../../components/Pagination/Pagination";
import Options from "../../components/options/options";

export default function Home() {
  const countries = useSelector((store) => store.countries);
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const filteredBy = useSelector((state) => state.filteredBy);
  const orderedBy = useSelector((state) => state.orderedBy);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    dispatch(getCountries()); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filteredBy === "All" && orderedBy === "All") {
      setPosts(countries);
    } else {
      setPosts(filteredCountries);
    }
    setCurrentPage(1);
  }, [countries, filteredCountries, filteredBy, orderedBy]);

  //otener los paises que se muestran por pagina

  const indexOfLP = currentPage * postsPerPage;
  const indexOfFP = indexOfLP - postsPerPage;
  const currentPosts = posts.slice(indexOfFP, indexOfLP);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Options />
      <CountryCard countries={currentPosts} />
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
}
