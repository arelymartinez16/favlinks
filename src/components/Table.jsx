function Table(props) {
    // my custom Table component
    let rows = props.links.map((data) => {
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.URL}</td>
            </tr>
        )
    });

    // return some JSX
    return (
      <table>
        <thead>
            <tr>
            <th>Link Name</th>
            <th>Link URL</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    )
}

export default Table; // export the component so we can use it in other files