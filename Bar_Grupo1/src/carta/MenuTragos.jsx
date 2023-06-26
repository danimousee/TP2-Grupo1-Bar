import { useEffect, useState } from "react";
import { useGetAllTragosQuery } from "../store/service/tragos";

const MenuTragos = () => {
    const {data, isError, isLoading} = useGetAllTragosQuery();

    if (isLoading) {
        return <h1>Cargando Tragos...</h1>
    }

    if (isError) {
        return <h1>Error al cargar los Tragos</h1>
    }

    return (
        <>
        <h1>MENÚ DE TRAGOS</h1>
        <div className="trago">
           //TODO: ACA HAY QUE AGREGAR LOS TRAGOSsss
        </div>
        </>
    )
}

export default MenuTragos
