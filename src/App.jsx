
import { useState } from "react";

function OrderList({ items }) {
    return (
        <div>
            <h3>Order List</h3>

            {items.map((item, index) => (
                <div style={styles.item} key={index}>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                    <span>{item.copies}</span>
                </div>
            ))}
        </div>
    );
}

function Slip() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [copies, setCopies] = useState("");
    const [list, setList] = useState([]);
    const [totalCopies, setTotalCopies] = useState(0);
    const [message, setMessage] = useState("");

    function addItem() {
        if (copies.trim() === "") {
            setMessage("Type the copies");
            return;
        }

        if (title.trim() === "" || price.trim() === "") {
            return;
        }

        const newItem = {
            title: title,
            price: price,
            copies: Number(copies)
        };

        setList([...list, newItem]);
        setTotalCopies(totalCopies + Number(copies));

        setTitle("");
        setPrice("");
        setCopies("");
        setMessage("");
    }

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
                type="text"
                placeholder="Copies"
                value={copies}
                onChange={(e) => setCopies(e.target.value)}
            />

            <button onClick={addItem}>Add</button>

            <p style={styles.message}>{message}</p>

            <OrderList items={list} />

            <h3>Copies: {totalCopies}</h3>
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
    item: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ddd"
    },
    message: {
        color: "red",
        fontWeight: "bold"
    },
    footer: {
        backgroundColor: "green",
        color: "white",
        padding: "15px",
        marginTop: "30px"
    }
};


export default App;
