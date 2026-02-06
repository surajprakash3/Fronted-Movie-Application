export const halls = [
    { id: 1, name: "Galaxy Cinema", image: "https://picsum.photos/400/250?1", city: 'Mumbai', location: 'Andheri' },
    { id: 2, name: "Star Theater", image: "https://picsum.photos/400/250?2", city: 'Delhi', location: 'Paharganj' },
    { id: 3, name: "Royal Hall", image: "https://picsum.photos/400/250?3", city: 'Bengaluru', location: 'MG Road' },
    { id: 4, name: "Mega Screens", image: "https://picsum.photos/400/250?4", city: 'Mumbai', location: 'Bandra' },
    { id: 5, name: "Dream Cinema", image: "https://picsum.photos/400/250?5", city: 'Pune', location: 'FC Road' },
    { id: 6, name: "PVR Deluxe", image: "https://picsum.photos/400/250?6", city: 'Mumbai', location: 'Lower Parel' },
    { id: 7, name: "INOX Gold", image: "https://picsum.photos/400/250?7", city: 'Delhi', location: 'Saket' },
    { id: 8, name: "City Multiplex", image: "https://picsum.photos/400/250?8", city: 'Chennai', location: 'T. Nagar' },
    { id: 9, name: "Sky View Hall", image: "https://picsum.photos/400/250?9", city: 'Bengaluru', location: 'Whitefield' },
    { id: 10, name: "Plaza Cinema", image: "https://picsum.photos/400/250?10", city: 'Hyderabad', location: 'Hitech City' },
    { id: 11, name: "Silver Screen", image: "https://picsum.photos/400/250?11", city: 'Pune', location: 'Koregaon Park' },
    { id: 12, name: "Sunshine Theater", image: "https://picsum.photos/400/250?12", city: 'Kolkata', location: 'Park Street' },
    { id: 13, name: "Moonlight Hall", image: "https://picsum.photos/400/250?13", city: 'Mumbai', location: 'Dadar' },
    { id: 14, name: "Epic Cinema", image: "https://picsum.photos/400/250?14", city: 'Bengaluru', location: 'Koramangala' },
    { id: 15, name: "Grand Screens", image: "https://picsum.photos/400/250?15", city: 'Delhi', location: 'Connaught Place' },
    { id: 16, name: "Classic Theater", image: "https://picsum.photos/400/250?16", city: 'Chennai', location: 'Adyar' },
    { id: 17, name: "Nova Cinema", image: "https://picsum.photos/400/250?17", city: 'Hyderabad', location: 'Banjara Hills' },
    { id: 18, name: "Urban Plex", image: "https://picsum.photos/400/250?18", city: 'Mumbai', location: 'Vile Parle' },
    { id: 19, name: "Elite Screens", image: "https://picsum.photos/400/250?19", city: 'Kolkata', location: 'Salt Lake' },
    { id: 20, name: "Prime Cinema", image: "https://picsum.photos/400/250?20", city: 'Pune', location: 'Hadapsar' }
];

function Hall({ selectedMovie, selectedCity, setPage, setSelectedHall }) {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-actions"><button onClick={() => setPage("success")}>Back</button></div>
                <h2>{selectedMovie ? `${selectedMovie.Title} - Select Hall` : 'Select Hall'}</h2>
                <div style={{ width: 64 }} />
            </div>

            <div className="hall-grid" style={{ marginTop: 12 }}>
                {halls
                    .filter(h => !selectedCity || h.city === selectedCity)
                    .map(hall => (
                    <div
                        key={hall.id}
                        className="hall-card"
                        onClick={() => { setSelectedHall(hall); setPage("booking"); }}
                    >
                        <img src={hall.image} alt={hall.name} />
                        <h3>{hall.name}</h3>
                        <p style={{ margin: 8, color: 'var(--muted)', fontSize: 14 }}>{hall.city} — {hall.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hall;
