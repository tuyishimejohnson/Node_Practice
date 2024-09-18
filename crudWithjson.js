const express = require("express");
const myApp = express();
const port = 3000;
const fs = require("fs");
myApp.use(express.json());

// Get the data from a json file
myApp.get("/", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, text) => {
    if (err) {
      console.log("Error fetching");
    } else {
      try {
        let data = JSON.parse(text);
        res.json(data);
      } catch (error) {
        res.send("Error while getting data", error);
      }
    }
  });
});

// Get data by id
myApp.get("/:id", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Server error");
    } else {
      let newData = JSON.parse(data);
      let index = newData.findIndex(
        (item) => item.id === parseInt(req.params.id)
      );
      res.send(index);
    }
  });
});

// Post/Add data from a json file
myApp.post("/", (req, res) => {
  const newObject = req.body;
  fs.readFile("./data.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Error while fetching", error);
    } else {
      let newItem = JSON.parse(data);
      newItem.push(newObject);
      fs.writeFile("./data.json", JSON.stringify(newItem), (error) => {
        if (error) {
          res.status(500).send("Error occured");
        } else {
          res.status(200).send("daata sent successfully");
        }
      });
      res.send(newObject);
    }
  });
});

// Update data from a json file
myApp.put("/:id", (req, res) => {
  const updated = req.body;
  fs.readFile("./data.json", "utf-8", (error, text) => {
    if (error) {
      console.log("error ", error);
    } else {
      const data = JSON.parse(text);
      let index = data.map((item) => item.id).indexOf(req.params.id);
      if (index !== -1) {
        res.status(404).send("item not found!!!");
      }

      let result = data.map((obj) =>
        obj.id == req.params.id ? { id: req.params.id, ...updated } : obj
      );

      fs.writeFile("./data.json", JSON.stringify(result), (error) => {
        if (error) {
          res.status(500).send("server error");
        } else {
          res.status(200).send("Data updated successfully");
        }
      });
    }
  });
});

// Delete data from json file
myApp.delete("/:id", (req, res) => {
  fs.readFile("./data.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Error while deleting data");
      res.status(500).send("this is an error", error);
    } else {
      const deleteData = JSON.parse(data);
      let index = deleteData.findIndex((item) => item.id == req.params.id);
      if (index === -1) {
        res.status(404).send("item not found!!!");
      }

      let result = deleteData.filter((item) => item.id != req.params.id);
      fs.writeFile("./data.json", JSON.stringify(result), (err) => {
        if (err) {
          console.log("This is an error");
          res.status(500).send("Let's go outside");
        } else {
          res.status(200).send("Data deleted successfully");
        }
      });
    }
  });
});

myApp.listen(port, () => {
  console.log("listening to port " + port);
});
