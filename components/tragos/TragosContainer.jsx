import { useEffect, useState } from "react";
import PersonajesMap from "./PersonajesMap";

const TragosContainer = () => {
  const {data, isError, isLoading} = useGetAllCharactersQuery();

  return isLoading? <h1>Esta cargando </h1> :<TragosMap tragos={data.results} />;
};
export default TragosContainer;