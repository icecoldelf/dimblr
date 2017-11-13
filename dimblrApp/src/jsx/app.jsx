const contentNode = document.getElementById('contents');

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
        const issue = this.props.issue;
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
    constructor() {
        super();
        this.state = { issues: [] };
        this. createTestIssue = this.createTestIssue.bind(this);
        setTimeout(this.createTestIssue, 2000);
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        setTimeout(() => {
            this.setState({ issues: issues });
        }, 500);
    }
    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }
    createTestIssue() {
        this.createIssue({
            status: 'New', owner: 'Pieta', created: new Date(), title: 'Completion date should be optional'
        });
    }
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <button onClick={this.createTestIssue}>Add</button>
                <hr />
                <IssueAdd />
            </div>
        )
    }
}
                    
ReactDOM.render(<IssueList />, contentNode);