import { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = ''
const URL = "https://api.spoonacular.com/recipes/complexSearch"

export default function Search({foodData, setFoodData}) {

    const [query, setQuery] = useState("pasta");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            const results = data.results;
            console.log(results);
            setFoodData(results);
        }

        fetchFood();
    }, [query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}