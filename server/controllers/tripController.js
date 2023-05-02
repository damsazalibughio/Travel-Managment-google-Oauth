// Model
const Trip = require('../models/tripModel')

const getTripInfo = async (req, res) =>{
    const trips = await Trip.find();
    res.status(200).json({success:true, trips})
}


module.exports = {
    getTripInfo
}