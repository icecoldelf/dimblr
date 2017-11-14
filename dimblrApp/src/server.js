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

app.post('/api/issues',  (req, res) => {
  const newIssue = req.body;
  newIssue.id = issues.length + 1;
  newIssue.created = new Date();

  if (!newIssue.status) newIssue.status = 'New';

  issues.push(newIssue);

  res.json(newIssue);
});