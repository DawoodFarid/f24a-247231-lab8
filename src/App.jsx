
function App() {
    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <h1 style={{ color: "white" }}>Green Cafe</h1>
            </header>

            <main style={styles.main}>
                <h2>The Book Slip</h2>
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
        color: "white",
        padding: "25px"
    },
    main: {
        padding: "40px"
    },
    footer: {
        backgroundColor: "green",
        color: "white",
        padding: "15px",
        marginTop: "30px"
    }
};

export default App;
