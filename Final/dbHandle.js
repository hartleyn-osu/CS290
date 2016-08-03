var mysql = require('mysql');

var pool = mysql.createPool({
	host : 'localhost',
	user : 'student',
	password : 'default',
	database : 'student'
});

app.get('/', function(req, res, next){
	var context = {};
	pool.query('SELECT * FROM exercise', function(err, rows, fields){
		if(err){
			next(err);
			return;
		}
		context.results = JSON.stringfy(rows);
		res.render('home', context);
	});
});

app.get('/insert', function(req, res, next){
	var context = {};
	mysql.pool.query("INSERT INTO exercise (`name`) VALUES (?), (`reps`) VALUES (?), (`weight`) VALUES (?), (`pounds`) VALUES (?), (`exDate`) VALUES (?)", *fix*[req.query.c], function(err, result){
			if(err){
				next(err);
				return;
			}
			context.results = "";
			res.render('home', context);
		});
});

app.get('/simple-update', function(req, res, next){
	var context = {};
	mysql.pool.query("UPDATE exercise SET name=?, reps=?, weight=?, pounds=?, exDate=? ", [req.query.name, req.query.done, req.query.due, req.query.id], function(err, result){
			if(err){
				next(err);
				return;
			}
		context.results = "Updated " + results.changedRows + " rows.";
		res.render('home', context);
	});
});

app.get('/safe-update', function(req, res, next){
	var context = {};
	mysql.pool.query("SELECT * FROM exercise WHERE id=?", 
		[req.query.id], function(err, result){
			if(err){
				next(err);
				return;
			}
			if(result.length == 1){
				var curVals = reults[0];
				mysql.pool.query("UPDATE exercise SET name=?, reps=?, weight=?, pounds=?, exDate=? WHERE id=? ",
					[req.query.name || curVals.name, req.query.reps || curVals.reps, req.query.weight || curVals.weight, req.query.pounds || curVals.pounds, 
					req.query.exDate || curVals.exDate, req.quer.id],
					function(err, result){
						if(err){
							next(err);
							return;
						}
						context.reults = "Updated " + result.changedRows + " rows.";
						res.render('home', context);
					});
			}
		})
})

app.get('/delete', function(req, res, next){
	var context = {};
	pool.query("DELETE FROM exercise WHERE id=?", [req.query.id], function(err, result){
		if(err){
			next(err);
			return;
		}
		context.results = "Deleted " + result.changedRows + " rows.";
		res.render('home', context);
	});
});

app.get('/reset-table', function(req, res, next){
	var context = {};
	pool.query("DROP TABLES IF EXISTS exercise", function(err){
		var createString = "CREATE TABLE exercise(" +
			"id INT PRIMARY KEY AUTO_INCREMENT," +
			"name VARCHAR(255) NOT NULL," +
			"reps INT," +
			"weight INT," +
			"pounds BOOLEAN," +
			"exDate	DATE)";
		pool.query(createString, function(err){
			context.results = "Table reset";
			res.render('home', context);	
		})
	});
});
















