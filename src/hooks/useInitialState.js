import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.
  //[ nombre de la variable para asignar estado, actualizar a este estado ]
  const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

  //El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
  //El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.
  //El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.
  //Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API); //A fetch se le entrega la API
        const data = await response.json();
        return setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  //retornar el estado
  return videos;
}

export default useInitialState;