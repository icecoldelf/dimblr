const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

app.listen(8080, function () {
  console.log('App started on port 8080');
});

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

app.get('/api/issues', (req, res) => {
  const metadata = { total_count: issues.length };
  res.json({ _metadata: metadata, records: issues });
});

const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};

const issueFieldType = {
  id: 'required',
  status: 'required',
  owner: 'required',
  effort: 'optional',
  created: 'required',
  completionDate: 'optional',
  title: 'required'
};

function validateIssue(issue) {
  for (const field in issueFieldType) {
    const type = issueFieldType[field];
    if (!type) {
      delete issue[field];
    } else if (type === 'required' && !issue[field]) {
      return `${field} is required.`;
    }
  }

  if (!validIssueStatus[issue.status])
    return `${issue.status} is not a valid status.`;
}

app.post('/api/issues',  (req, res) => {
  const newIssue = req.body;
  newIssue.id = issues.length + 1;
  newIssue.created = new Date();

  const err = validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}`});
    return;
  }

  issues.push(newIssue);

  res.json(newIssue);
});