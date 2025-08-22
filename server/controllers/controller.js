const Question = require('../models/question');

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions', error });
    }
}

const createQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating question', error });
    }
}
const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }   
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error updating question', error });
    }   
}
const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting question', error });
    }
}

const getQuestionByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const questions = await Question.find({ category });
        if (questions.length === 0) {
            return res.status(404).json({ message: 'No questions found for this category' });
        }
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions by category', error });
    }
}
const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }   
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving question', error });
    }
}

const getQuestionByQuantity = async (req, res) => {
    try {
        const { quantity } = req.params;
        const questions = await Question.aggregate([{ $sample: { size: parseInt(quantity) } }]);
        if (questions.length === 0) {
            return res.status(404).json({ message: 'No questions found' });
        }
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving random questions', error });
    }
}

module.exports = {
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionByCategory,
    getQuestionById,
    getQuestionByQuantity
}