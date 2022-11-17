const express = require('express');
const { createIncCtrl, fetchAllIncCtrl, fetchOneIncCtrl, updateIncCtrl, deleteIncCtrl } = require('../../controllers/income/incomeCtrl');
const authMiddleware = require('../../middlewares/authMiddleware');

const incomeRoute = express.Router()

incomeRoute.post('/', authMiddleware, createIncCtrl)
incomeRoute.get('/', authMiddleware, fetchAllIncCtrl)
incomeRoute.get('/:id', authMiddleware, fetchOneIncCtrl)
incomeRoute.put('/:id', authMiddleware, updateIncCtrl)
incomeRoute.delete('/:id', authMiddleware, deleteIncCtrl)



module.exports = incomeRoute
