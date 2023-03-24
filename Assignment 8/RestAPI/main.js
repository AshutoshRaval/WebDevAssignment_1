const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Ashutosh01:Carpool123@atlascluster.iykif6c.mongodb.net/Users3', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

// Define user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    validate:{
      validator: (value) => {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
      },
      message: 'Invalid full name (no special charaters are allowed) '      
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: 'Invalid email'
    }
  },
  password: {
    type: String,
    required: true,
    // minlength: 8,
    // maxlength: 20,
    // validate: {
    //   validator: (value) => {
    //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
    //   },
    //   message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and be 8-20 characters long'
    // }
  }
});

// Define user model
const User = mongoose.model('User', userSchema);

// Create user endpoint
app.post('/user/create', async (req, res) => {
  console.log("Inside Post Request")
  //console.log(req)
  // const fullName =  
  // email = 
  // password  = req.body.;

  // Hash the password using bcrypt
  //   const hashedPassword = await bcrypt.hash(password, 10);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  // Create new user
  const user = new User({
    fullName: req.body.fullName,
    //fullName:'Ashutosh145',
    email: req.body.email,
    // email:'ashutosh120@gmail.com',
    // password: hashedPassword
    //password: req.body.password
    password: hashedPassword
    //password: 'Ashutosh123'
  });

  try {
    // Save user to the database
    const val = await user.save();
    // res.json(val);
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//PUT
app.put("/update/edit/:fullName1", async (req, res) => {

  //let upName = req.params.fullName1;
  let upEmail = req.params.fullName1;
  console.log(upEmail);
  let upName_new = req.body.fullName;
  let upPassword_new = req.body.password;
  //let upemail_new = req.body.email;

  //findOneUpdate
  // User.findOneAndUpdate({fullName:upName},{$set:{fullName:upName_new,email:upemail_new}},{new:true},
  //   (err,data)=>{

  //     if(data==null){
  //       res.send("Nothing Found");
  //     }else{
  //       res.send(data)
  //     }


  // })

  // User.findOneAndUpdate({fullName:upName},{$set:{fullName:upName_new,email:upemail_new}})

  // const user = await User.findOne({ fullName: upName });
  const user = await User.findOne({ email: upEmail });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  } else {
    res.status(200).json({ message: 'User found' });
  }

  console.log(upPassword_new);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(upPassword_new, salt);

  user.fullName = upName_new;
  user.password = hashedPassword;

  await user.save();

})

//DELETE
app.delete("/user/delete/:email1", async (req, res) => {

  try {
    let delEmail = req.params.email1;
    console.log(delEmail);
    const user = await User.findOne({ email: delEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // delete the user
    await user.deleteOne();

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }

  //const user = User.findOneAndDelete({ fullName: delName})
  // const user = User.deleteOne({email:'baaga1399@gmail.com'});
  //const user = User.findOneAndDelete({ fullName:delEmail});
  //const result =  User.findOneAndDelete({ email: delEmail});
  //console.log(result.count)
  //console.log("result=" + JSON.stringify(result));
  //   console.log(result.deletedCount)
  //   if (result.deletedCount === 1) {
  //     res.status(200).send('User deleted successfully');
  //   } else {
  //     res.status(404).send('User not found');
  //   }
  // } catch (err) {
  //   res.status(500).send(err.message);
  //result.delete()


});



//Get

app.get('/user/getAll', async (req, res) => {
  try {
    const users = await User.find({}, { fullName: 1, email: 1, password: 1 }); // only return firstName, lastName, and email fields, exclude _id
    res.json(users);
    users.forEach(element => {
      console.log("--------------")
      console.log(element.fullName);
      console.log(element.email)
      console.log(element.password)
      console.log("--------------")
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

  
 
});



// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
