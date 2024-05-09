import Citas from '../models/Citas.js';

//metodo o funciones CRUD

//metodo mostrar todas las citas
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll()
        res.json(citas)
    } catch (error) {
        res.json({msg: error.message})
    }
}

// metodo mostra una cita
export const getCita = async (req, res) => {
    try {
        let cita = await Citas.findAll({
            where: {id:req.params.id}
        })
        if(cita.length == 0){
            res.json({msg:"Cita no existe"})
        } else {
            res.json(cita[0])
        }
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const setCita = async (req, res) => {
    try {
        await Citas.create(req.body)
        res.json({msg:"Cita agregada correctamente"})
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const updateCita = async (req, res) => {
    try {
        let cita = await Citas.findAll({
            where: {id:req.params.id}
        })
        if(cita.length == 0){
            res.json({msg:"Cita no existe"})
        } else {
            await Citas.update(req.body, {
                where: {id:req.params.id}
            })
            res.json({msg:"Cita actualizada correctamente"})
        }
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const deleteCita = async (req, res) => {
    try {
        let cita = await Citas.findAll({
            where: {id:req.params.id}
        })
        if(cita.length == 0){
            res.json({msg:"Cita no existe"})
        } else {
            await Citas.destroy({
                where: {id:req.params.id}
            })
            res.json({msg:"Cita eliminada correctamente"})
        }
    } catch (error) {
        res.json({msg: error.message})
    }
}
