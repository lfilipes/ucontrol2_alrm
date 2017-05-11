var mongoose = require('mongoose')
  mongoose.connect( 'mongodb://lfilipe.email:mlab123@ds137261.mlab.com:37261/mlabsensordb', function () {
  //mongoose.connect('mongodb://localhost/sensordb', function () {  
  console.log('mongodb connected to mLab: ds137261.mlab.com:37261/mlabsensordb')
  //console.log('mongodb connected to local mongodb')
})
module.exports = mongoose
