
import { useState } from "react";

function Slip() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [copies, setCopies] = useState(0);

    return (
        <div style={styles.slip}>
            <h2>The Book Slip</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Copies"
                value={copies === 0 ? "" : copies}
                onChange={(e) => setCopies(e.target.value)}
            />

            <button>Add</button>

            <h3>Copies: 0</h3>
        </div>
    );
}

function App() {
    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <h1 style={{ color: "white" }}>Green Cafe</h1>
            </header>

            <main style={styles.main}>
                <Slip />
            </main>

            <footer style={styles.footer}>
                Roll Number: 247231
            </footer>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#f1f8f1",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
    },
    header: {
        backgroundColor: "green",
        padding: "25px"
    },
    main: {
        padding: "40px"
    },
    slip: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
        margin: "auto",
        padding: "25px",
        backgroundColor: "white",
        borderRadius: "10px"
    },
    footer: {
        backgroundColor: "green",
        color: "white",
        padding: "15px",
        marginTop: "30px"
    }
};

export default App;
