import RoomModel from '../models/roomModel.js'

export const getTest = (_,res)=>{
    res.send({name : "Hardcoders"});
}

export const postTest = (req,res)=>{
    res.send(req.body);
}

export const addRoom = async (req, res)=>{
    const room = new RoomModel(req.body);
    await room.save();
    res.send(room);
    
}

//Read All

export const getRooms = async(req,res)=>{
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

//Read One

export const getRoom = async(req,res)=>{
    console.log(req.params.id);
    const room = await RoomModel.find({_id : req.params.id})
    res.send(room)
}

//Update

export const updateRoom = async(req,res)=>{
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body) //quoi replacer et par quoi le remplacer
    await room.save();
    res.send(room)
}

//Delete

export const deleteRoom = async(req,res)=>{
    const room = await RoomModel.findByIdAndDelete(req.params.id) 
    if(!room){
        res.status(404).send('Aucune chambre trouvée.')
    }
    res.status(200).send()
}