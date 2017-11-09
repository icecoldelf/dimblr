const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>Issue Filter</div>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 6};
        var issueList = new Array();
        issueList = ["I hate everything","I love everything","there is no cake","the world is going to end"];
        const rows = issueList.map(val => <IssueRow issue_title={val} />);
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderStyle}>ID</th>
                        <th style={borderStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class IssueRow extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 4};
        return (
            <tr>
                <td style={borderStyle}>{this.props.issue_id}</td>
                <td style={borderStyle}>{this.props.issue_title}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>Issue Add</div>
        )
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        )
    }
}
                    
ReactDOM.render(<IssueList />, contentNode);