import styles from './App.module.css';
import Board from "./board/Board";

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tic Tac Toe</h1>
            <Board/>
        </div>
    );
}

export default App;
