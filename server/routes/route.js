const {
    getAllQuestions,createQuestion,updateQuestion,
    deleteQuestion,getQuestionByCategory,
    getQuestionById,getQuestionByQuantity} = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router.get('/questions', getAllQuestions);
router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);
router.get('/questions/category/:category', getQuestionByCategory);
router.get('/questions/:id', getQuestionById);
router.get('/questions/quantity/:quantity', getQuestionByQuantity);

module.exports = router;
