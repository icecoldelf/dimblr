const express = require('express'),
      path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));

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