import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonajeDetail from "./PersonajeDetail";
//import { useGetOneCharacterQuery } from "../../store/service/rickAndMorty";

const TragoContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOneCharacterQuery(id);
  return isLoading ? (
    <h1>Esta cargando</h1>
  ) : (
    <TragoDetail trago={data} />
  );
};
export default TragoContainer;