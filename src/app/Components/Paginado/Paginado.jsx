import styles from "../Paginado/Paginado.module.css"

export const Paginado = ({allCountries, pagedNumber, countriesPerPage}) => {

    const pages = [];

    for(let i = 1; i < Math.ceil(allCountries / countriesPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className={styles.paginadocontainer}>
                {
                   pages.length>1 && pages.map ( el => (
                            <button className={styles.paginado1} key={el} onClick={()=>{pagedNumber(el)}}>{el}</button>
                    ))
                }

        </div>
    )
}
export default Paginado;

