import express from 'express';
import passport from 'passport'
import { addRoom, getTest , postTest , getRooms , getRoom , updateRoom , deleteRoom } from '../controllers/roomControllers.js';
import { catchErrors } from '../helpers.js';


const router = express.Router();

router.get('/' , (_,res)=>{
    res.send('Hello les Hardcoders')
})

router.get('/test' , getTest)

router.post('/test' , postTest )

router.post('/room' , catchErrors(addRoom))

router.get('/room/:id' , catchErrors(getRoom))

router.patch('/room/:id' , catchErrors(updateRoom))

router.delete('/room/:id' , catchErrors(deleteRoom))

router.get('/rooms' , catchErrors(getRooms))

//Authentification 

router.post('/signup', passport.authenticate('signup', { session: false }))

export default router;