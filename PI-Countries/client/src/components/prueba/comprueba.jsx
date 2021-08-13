import { useEffect } from "react";

export default function Comprueba(props) {
  useEffect(() => {
    props.setPosts(props.countries);
  }, [props.countries, props]);
  return <div></div>;
}
