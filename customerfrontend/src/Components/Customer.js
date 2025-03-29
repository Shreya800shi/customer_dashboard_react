import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

export default function Customer() {
    const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [customer, setCustomer] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        const newCustomer = { name, address }; // Fixed variable name

        console.log(newCustomer);

        fetch("http://localhost:8082/customer/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer),
        }).then(() => {
            console.log("New Customer added");
        });
    };

    useEffect(() => {
        fetch("http://localhost:8082/customer/getAll") // Fixed URL
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result);
            });
    }, []);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: blue[500] }}>
                    <u>Add Customers</u>
                </h1>
                <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1 } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Customer Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Customer Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" disableElevation onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
            </Paper>

            <h1>Customer</h1>
            <Paper elevation={3} style={paperStyle}>
                {customer.map((customer) => ( // Fixed .map() function
                    <Paper
                        elevation={6}
                        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
                        key={customer.id}
                    >
                        <p>Id: {customer.id}</p>
                        <p>Name: {customer.name}</p>
                        <p>Address: {customer.address}</p>
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
