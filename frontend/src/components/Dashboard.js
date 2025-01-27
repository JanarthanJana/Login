import React from "react";

const Dashboard = () => {
    // Mock data for items and message
    const items = [
        { _id: 1, name: "Product 1", price: 100, description: "Best Product", image: "https://via.placeholder.com/100" },
        { _id: 2, name: "Product 2", price: 150, description: "Best Product", image: "https://via.placeholder.com/100" },
        { _id: 3, name: "Product 3", price: 200, description: "Best Product", image: "https://via.placeholder.com/100" },
    ];

    const message = { type: "success", message: "Welcome to the dashboard!" }; // You can change message as needed

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-12">
                    {/* Message rendering */}
                    {message && (
                        <div className={`alert alert-dismissible fade show alert-${message.type}`} role="alert">
                            <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                            <strong>{message.message}</strong>
                        </div>
                    )}

                    {/* Table of items */}
                    {items.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-striped text-center my-3">
                                <thead>
                                    <tr className="table-dark">
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Image</th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">description</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {items.map((row, index) => (
                                        <tr key={row._id} className="align-middle text-center">
                                            <td>{index + 1}</td>
                                            <td><img src={row.image} width="100" className="img-thumbnail" alt={row.name} /></td>
                                            <td>{row.name}</td>
                                            <td>{row.price}</td>
                                            <td>{row.description}</td>
                                            {/* Check (tick) icon for 'Complete' or 'Mark as Done' action */}
<button className="btn btn-success mr-2 mt-2">edit</button>

{/* Trash icon for 'Delete' action */}
<button className="btn btn-danger mt-2">Delete</button>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <h1 className="text-center text-secondary mt-5">No items found in the database!</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
