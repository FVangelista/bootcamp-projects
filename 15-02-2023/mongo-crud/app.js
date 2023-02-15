const { MongoClient } = require('mongodb');
let url =
  'mongodb+srv://bortoletti_pubblic:010203@cluster0.g4nlbek.mongodb.net/school?retryWrites=true';

//   DB connection
MongoClient.connect(url)
  .then((db) => {
    const accountdb = db;
    const collection = accountdb.db('school');
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

//   Create a collection function

function createCollections(collection, database) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    dbase.createCollection(collection, (err, res) => {
      if (err) throw err;
      console.log('A collection was created');
      db.close();
    });
  });
}

// Insert documents inside of a collection
function createDocuments(myObj, database, collection) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    dbase.collection(collection).insertMany(myObj, (err, res) => {
      if (err) throw err;
      console.log(`Number of inserted records ${res.insertedCount}`);
      db.close();
    });
  });
}

const listStudents = [
  {
    id: 1,
    firstName: 'peter',
    lastName: 24,
    register: '0304',
    course: 'marketing',
  },
  {
    id: 2,
    firstName: 'anna',
    lastName: 20,
    register: '1702',
    course: 'design',
  },
  {
    id: 3,
    firstName: 'jona',
    lastName: 27,
    register: '0202',
    course: 'bootcamp',
  },
];
const listCourses = [
  {
    id: 1,
    course: 'marketing',
    classes: ['seo', 'digital marketing', 'storytelling'],
    instructor: 'giuseppe',
  },
  {
    id: 2,
    course: 'design',
    classes: ['ui-design', 'ux-prototyping', 'design-basics'],
    instructor: 'casimiro',
  },
  {
    id: 3,
    course: 'bootcamp',
    classes: ['javascript', 'node.js', 'react'],
    instructor: 'simona',
  },
];

// createDocuments(listStudents, 'school', 'students');
// createDocuments(listCourses, 'school', 'courses');

// Search through findOne/find will return the value of the first obj

function searchCollectionItem(database, collection, id) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    dbase.collection(collection).findOne({ id: id }, (err, res) => {
      if (err) throw err;
      console.log(res.course);
      db.close();
    });
  });
}

function searchCollections(database, collection, objData) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    dbase
      .collection(collection)
      .find(objData)
      .toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
      });
  });
}

// searchCollectionItem('school', 'courses', 3);
// searchCollections('school', 'students', {});

// Delete

function deleteDocument(database, collection, id) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    dbase.collection(collection).deleteMany({ id: id }, (err, obj) => {
      if (err) throw err;
      console.log(`${obj.result} deleted records`);
      db.close();
    });
  });
}

// deleteDocument('school', 'students', 3);

// Update

function updateDocument(database, collection, id, objValue) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db(database);

    let query = { id: id };
    let newValue = { $set: { lastName: objValue } };

    dbase.collection(collection).updateOne(query, newValue, (err, obj) => {
      if (err) throw err;
      console.log(`Updated record`);
      db.close();
    });
  });
}

// updateDocument('school', 'students', 1, 'sanders');
