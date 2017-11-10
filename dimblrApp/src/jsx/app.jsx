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
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)

        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
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
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
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
        const issues = [
            {
                id: 1, 
                status: 'Open', 
                owner: 'Buck', 
                created: new Date('2017-11-09'), 
                effort: 5, 
                completeionDate: undefined, 
                title: 'Buck is hungry'
            },
            {
                id: 2, 
                status: 'Closed', 
                owner: 'Buck', 
                created: new Date('2017-11-07'), 
                effort: 6, 
                completeionDate: undefined, 
                title: 'Buck ate too much'
            }
        ];

        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={issues} />
                <hr />
                <IssueAdd />
            </div>
        )
    }
}
                    
ReactDOM.render(<IssueList />, contentNode);