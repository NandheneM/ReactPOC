const Rappers = [
    { id: 1, name: "Eminem" },
    { id: 2, name: "Coolio" },
    { id: 3, name: "Drake" },
]

const RapperList = Rappers.map(item =>
    <li key={item.id}>
        {item.name}
    </li>
);

function RappersList() {
    return (
        <div>
            <h4>List of Rappers:</h4>
            <ul>{RapperList}</ul>
        </div>
    );
}

export default RappersList;
