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
        return (
            <div>Issue Table</div>
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