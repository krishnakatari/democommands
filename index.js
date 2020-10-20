var mysql=require('mysql')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Tiger@orcl',
    database:'sql_hr'
})
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });
  connection.query('SELECT * FROM employees', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    
    console.log('res are ', results[4].last_name);
    delete results[4];
    console.log('res are ', results[3].last_name);
    
  });
  connection.end();
  const express=require('express')