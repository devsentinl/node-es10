import { Router } from "express"
import {connect} from '../database'
import {ObjectID} from 'mongodb'

const router=Router()
router.get('/',async (req,res)=>{
    const db=await connect()
    const result=await db.collection('tasks').find({}).toArray()
    res.json(result)
})

router.post('/',async (req,res)=>{
    const db=await connect()
    const {title,description} =req.body
    const result=await db.collection('tasks').insert({title,description})
    res.json(result.ops[0])
})
router.get('/:id',async (req,res)=>{
    const {id}=req.params
    const db=await connect()
    const result=await db.collection('tasks').findOne({_id:ObjectID(id)})
    res.json(result)
})
router.delete('/:id',async (req,res)=>{
    const {id}=req.params
    const db=await connect()
    const result=await db.collection('tasks').deleteOne({_id:ObjectID(id)})
    res.json({message:`Task ${id} deleted`,result:result.result})
})
router.put('/:id',async (req,res)=>{
    const {id}=req.params
    const task={
        title:req.body.title,
        description:req.body.description
    }
    const db=await connect()
    await db.collection('tasks').updateOne({_id:ObjectID(id)},{$set:task})
    res.json({message:`Task ${id} updated`})
})
export default router