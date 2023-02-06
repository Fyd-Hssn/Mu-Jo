const express = require('express');
const mongoose = require('mongoose');
const Notes = require('../database/NoteSchema.js');
const router = express.Router();

router.post('/saveNote', (req, res) => {

    let existingDoc; 
    
    mongoose.model('notes').findOne({
        userID: req.body.userID,
        trackID: req.body.trackID
    }, function (err, doc) {
        if (err){
            console.log(err)
        }
        else {
            if (doc == null){
                const newNote = new Notes({
                    userID: req.body.userID,
                    trackID: req.body.trackID,
                    notes: req.body.notes
                })
            
                newNote.save()
                .then(data => {
                    res.json(data)
                })
                .catch(err => {
                    res.json(err)
                })
            }
            else {
                res.redirect(307, '/app/updateNote')
            }
        }
    })
})

router.get('/getNote', (req, res) => {
    const rUserID = req.query.userID
    const rTrackID = req.query.trackID

    mongoose.model('notes').findOne({
        userID: rUserID,
        trackID: rTrackID
    })
    .then(data => {
        // res.json(data)
        res.send(data)
        console.log(data)
    })
    .catch(err => console.log(err)) 
})

router.post('/updateNote', (req, res) => {

    mongoose.model('notes').updateOne(
        {
            userID: req.body.userID,
            trackID: req.body.trackID
        },
        {
            notes: req.body.notes
        })
        .then(() => {
            mongoose.model('notes').findOne({
                userID: req.body.userID,
                trackID: req.body.trackID
            })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
        })
})

router.delete('/deleteNote', (req, res) => {
    const rUserID = req.body.userID
    const rTrackID = req.body.trackID

    mongoose.model('notes').deleteOne({
        userID: rUserID,
        trackID: rTrackID
    })
    .then(data => {
        // res.json(data)
        // res.send(data)
        console.log(data)
    })
    .catch(err => console.log(err)) 
})

module.exports = router