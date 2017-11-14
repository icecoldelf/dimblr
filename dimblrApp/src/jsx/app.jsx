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

const IssueRow = (props) => (
    <tr>
        <td>{props.issue.id}</td>
        <td>{props.issue.status}</td>
        <td>{props.issue.owner}</td>
        <td>{props.issue.created.toDateString()}</td>
        <td>{props.issue.effort}</td>
        <td>{props.issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
        <td>{props.issue.title}</td>
    </tr>
)

function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
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

class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });
        form.owner.value = ""; form.title.value = "";
    }
    render() {
        return (
            <div>
                <form name="issueAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="owner" placeholder="Owner" />
                    <input type="text" name="title" placeholder="Title" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
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
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
        )
    }
}
                    
ReactDOM.render(<IssueList />, contentNode);