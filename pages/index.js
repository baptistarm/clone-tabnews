import styles from "../styles/index.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <h1>Oi panqueca!!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoYI53I1zIOrTMtE2xxzxfEW0rdbcbwHkYQ&s" alt="Panquequinha"/>
        </div>
    );
}

export default Home;